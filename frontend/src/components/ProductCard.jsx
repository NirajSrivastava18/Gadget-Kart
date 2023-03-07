import React, { useState } from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  HStack,
  Text,
  Badge,
  useToast,
} from '@chakra-ui/react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/actions/cartActions';

const Rating = ({ rating, numberOfReviews }) => {
  const { iconSize, setIconSize } = useState('14px');
  return (
    <Flex>
      <HStack spacing="2px">
        <StarIcon Size={iconSize} w="14px" color="orange.500" />
        <StarIcon
          Size={iconSize}
          w="14px"
          color={rating >= 2 ? 'orange.500' : 'gray.200'}
        />
        <StarIcon
          Size={iconSize}
          w="14px"
          color={rating >= 3 ? 'orange.500' : 'gray.200'}
        />
        <StarIcon
          Size={iconSize}
          w="14px"
          color={rating >= 4 ? 'orange.500' : 'gray.200'}
        />
        <StarIcon
          Size={iconSize}
          w="14px"
          color={rating >= 5 ? 'orange.500' : 'gray.200'}
        />
      </HStack>
      <Text fontSize="md" fontWeight="bold" ml="4px">
        {`${numberOfReviews} ${numberOfReviews === 1 ? 'Review' : 'Reviews'}`}
      </Text>
    </Flex>
  );
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const cartInfo = useSelector((state) => state.cart);
  const { cart } = cartInfo;

  const addItem = (id) => {
    if (cart.some((cartItem) => cartItem.id === id)) {
      toast({
        description:
          'This items is already in the cart. Go to your cart to change the amount',
        status: 'error',
        isClosable: true,
      });
    } else {
      dispatch(addCartItem(id, 1));
      toast({
        description: 'Items added successfully',
        status: 'success',
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      p="2"
      spacing="3px"
      bg={useColorModeValue('white', 'grey.700')}
      minW="240px"
      h="450px"
      borderWidth="2px"
      rounded="lg"
      shadow="lg"
      position="relative"
    >
      {product.productisNew && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="rgb(1, 191, 113)"
        />
      )}
      {product.stock <= 0 && (
        <Circle
          size="10px"
          position="absolute"
          top={2}
          right={2}
          bg="red.300"
        />
      )}
      <Image src={product.image} alt={product.name} roundedTop="lg" />
      <Box flex="1" maxH="5" alignItems="baseline">
        {product.stock <= 0 && (
          <Badge rounded="full" px="2" fontSize="0.8rem" colorScheme="red">
            Sold Out
          </Badge>
        )}
        {product.productisNew && (
          <Badge rounded="full" px="2" fontSize="0.8rem" colorScheme="green">
            New
          </Badge>
        )}
      </Box>
      <Flex mt="1" justifyContent="space-between" alignContent="center">
        <Link
          as={ReactLink}
          to={`/product${product._id}`}
          pt="2"
          cursor="pointer"
        >
          <Box fontSize="2xl" fontWeight="bold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justify="space-between" alignItems="center" py="2">
        <Rating
          rating={product.rating}
          numberOfReviews={product.numberOfReviews}
        />
      </Flex>
      <Flex justify="space-between">
        <Box fontSize="3xl" color={useColorModeValue('grey.800', 'white')}>
          <Box as="span" color={'grey.600'} fontSize="3xl">
            ₹
          </Box>
          {product.price.toFixed(2)}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="rgb(13,13,13)"
          placement="top"
          color={'grey.800'}
          fontSize="1.2rem"
          isDisabled={product.stock <= 0}
        >
          <Button
            varient="ghost"
            display={'flex'}
            isDisabled={product.stock <= 0}
            onClick={() => addItem(product._id)}
          >
            <Icon as={TiShoppingCart} h={7} w={7} alignSelf="center" />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
