import { Component, OnInit } from '@angular/core';
import { faCaretDown, faHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css'],
})
export class Route2Component implements OnInit {
  faCaretDown = faCaretDown;
  faHeart = faHeart;
  items = [
    {
      id: 37,
      name: 'Mason Home',
      price: 1000,
      subName: 'Photo Frame and toy',
      category: 'Decor',
      image:
        'assets/categories_images/resizedimages/pexels-stephanie-ho-1214205 (1).jpg',
    },
    {
      id: 38,
      name: 'Opaquie',
      price: 500,
      subName: 'pack of 3 mug decors',
      category: 'Decor',
      image:
        'assets/categories_images/resizedimages/pexels-valeriia-miller-2516658 (1).jpg',
    },
    {
      id: 39,
      name: 'DecorM',
      price: 800,
      subName: 'White pot with green leafy',
      category: 'Decor',
      image: 'assets/categories_images/resizedimages/decor3.jpg',
    },
    {
      id: 40,
      name: 'Plant Decor',
      price: 800,
      subName: 'White pot with green leafy',
      category: 'Decor',
      image:
        'assets/categories_images/resizedimages/pexels-ylanite-koppens-796620.jpg',
    },
    {
      id: 1,
      name: 'MVMTM',
      price: 3000,
      subName: 'Brown analog Watch - For Men',
      category: 'Watches',
      image: 'assets/categories_images/resizedimages/clock.jpg',
    },
    {
      id: 2,
      name: 'Skull Candy',
      price: 2000,
      subName: 'Wireless Black head set',
      category: 'Head set',
      image: 'assets/categories_images/resizedimages/headset.jpg',
    },
    {
      id: 3,
      name: 'JMSk',
      price: 1500,
      subName: 'Glass and Wooden Hour Glass',
      category: 'Clock',
      image: 'assets/categories_images/resizedimages/hour_glass.jpg',
    },
    {
      id: 4,
      name: 'Watch',
      price: 2000,
      subName: 'Smart Watch - For Women',
      category: 'Watches',
      image:
        'assets/categories_images/resizedimages/pexels-alexandr-borecky-393047.jpg',
    },
    {
      id: 5,
      name: 'Allen Solley',
      price: 1000,
      subName: 'Black T shirt',
      category: 'Fashion',
      image: 'assets/categories_images/resizedimages/black t shirt.jpg',
    },
    {
      id: 6,
      name: 'Black long Sleeve Shirt',
      price: 1000,
      subName: 'White T shirt',
      category: 'Fashion',
      image:
        'assets/categories_images/resizedimages/black long sleeve shirt on white table.jpg',
    },
    {
      id: 7,
      name: 'Blue and White Shirt',
      price: 1000,
      subName: 'Blue and white checked dress shirt',
      category: 'Fashion',
      image: 'assets/categories_images/resizedimages/blue and white.jpg',
    },
    {
      id: 8,
      name: 'Pyjama',
      price: 800,
      subName: 'Plain White shirt',
      category: 'fashion',
      image:
        'assets/categories_images/resizedimages/pexels-artem-beliaikin-1100790.jpg',
    },
    {
      id: 9,
      name: 'T Shirt',
      price: 1000,
      subName: 'grey and navy blue sweat shirt',
      category: 'Fashion',
      image:
        'assets/categories_images/resizedimages/grey and navy blue sweat shirt.jpg',
    },
    {
      id: 10,
      name: 'Hanger',
      price: 800,
      subName: 'Colored Hangers',
      category: 'Hangers',
      image:
        'assets/categories_images/resizedimages/pexels-pixabay-39518 (1).jpg',
    },
    {
      id: 11,
      name: 'Hat',
      price: 500,
      subName: 'Black flower frame',
      category: 'Frame',
      image:
        'assets/categories_images/resizedimages/pexels-artem-beliaikin-1078973.jpg',
    },

    {
      id: 12,
      name: 'Woolen Hand bag',
      price: 120,
      subName: 'Pack of 2 Woolen bags',
      category: 'Hand bags',
      image: 'assets/categories_images/resizedimages/woolen_hand.jpg',
    },
    {
      id: 13,
      name: 'hand Bag',
      price: 120,
      subName: 'Golden Sling Bag',
      category: 'Hand Bags',
      image: 'assets/categories_images/resizedimages/golden_sling_bag.jpg',
    },
    {
      id: 14,
      name: 'Hand Bag',
      price: 3000,
      subName: 'Leather sling Bag',
      category: 'Hand Bags',
      image: 'assets/categories_images/resizedimages/wooden_sling_bag.jpg',
    },
    {
      id: 15,
      name: 'Hand Bag',
      price: 2000,
      subName: 'Solid handheld bag',
      category: 'Watches',
      image: 'assets/categories_images/resizedimages/solid_handheld_bag.jpg',
    },
    {
      id: 16,
      name: 'Hand bag',
      price: 1000,
      subName: ' Grey solid Sling Bag',
      category: 'Hand Bags',
      image: 'assets/categories_images/resizedimages/solid_sling_bag.jpg',
    },
    {
      id: 17,
      name: 'Plan silver Ring',
      price: 120,
      subName: 'Silver Ring',
      category: 'Rings',
      image:
        'assets/categories_images/resizedimages/pexels-megapixelstock-17834.jpg',
    },
    {
      id: 18,
      name: 'Ring',
      price: 1000,
      subName: 'Stoned Ring',
      category: 'Ring',
      image:
        'assets/categories_images/resizedimages/pexels-say-straight-2735981.jpg',
    },
    {
      id: 19,
      name: 'Glasses',
      price: 1000,
      subName: 'Cool glasses',
      category: 'Glasses',
      image: 'assets/categories_images/resizedimages/cool-glasses1 (1).jpg',
    },
    {
      id: 20,
      name: 'Glasses',
      price: 1000,
      subName: 'Cool glasses',
      category: 'Glasses',
      image: 'assets/categories_images/resizedimages/cool-glasses1 (2).jpg',
    },

    {
      id: 21,
      name: 'Pumps',
      price: 1000,
      subName: 'Peach Pumps for women',
      category: 'Footwear',
      image: 'assets/categories_images/resizedimages/peach_pumps.jpg',
    },

    {
      id: 22,
      name: 'Peep Toes',
      price: 800,
      subName: 'Nude Peep toes',
      category: 'Footwear',
      image: 'assets/categories_images/resizedimages/nude_peep_toes.jpg',
    },
    {
      id: 23,
      name: 'Shoes',
      price: 800,
      subName: 'Light Olive Shoes',
      category: 'Shoes',
      image: 'assets/categories_images/resizedimages/light_olive_shoes.jpg',
    },
    {
      id: 24,
      name: 'Shoes',
      price: 500,
      subName: 'White shoes',
      category: 'Footwear',
      image: 'assets/categories_images/resizedimages/pexels-mnz-1670766.jpg',
    },

    {
      id: 25,
      name: 'AllStin',
      price: 1000,
      subName: ' Chair',
      category: 'Furniture',
      image: 'assets/categories_images/resizedimages/chair.jpg',
    },
    {
      id: 26,
      name: 'Cushion',
      price: 1500,
      subName: 'Golden Cushions',
      category: 'Cushions',
      image:
        'assets/categories_images/resizedimages/pexels-izzy-hardy-1591047 (1).jpg',
    },
    {
      id: 27,
      name: 'Plain Cushion',
      price: 1000,
      subName: 'White Cushion',
      category: 'Cushions',
      image:
        'assets/categories_images/resizedimages/pexels-ekaterina-bolovtsova-6312053 (1).jpg',
    },
    {
      id: 28,

      name: 'Painted Cushion',
      price: 1000,
      subName: 'Green color Cushion',
      category: 'Cushions',
      image:
        'assets/categories_images/resizedimages/pexels-designecologist-1239221 (1).jpg',
    },
    {
      id: 29,
      name: 'Hanger',
      price: 500,
      subName: 'Steel Hanger',
      category: 'Hangers',
      image:
        'assets/categories_images/resizedimages/pexels-dids-2675052 (1).jpg',
    },
    {
      id: 30,
      name: 'Cups',
      price: 1000,
      subName: ' Brown Tea cups',
      category: 'Kitchen',
      image:
        'assets/categories_images/resizedimages/pexels-samer-daboul-1212811 (1).jpg',
    },
    {
      id: 31,
      name: 'Bag',
      price: 120,
      subName: 'Brown cotton Bag',
      category: 'Storage ',
      image:
        'assets/categories_images/resizedimages/pexels-ready-made-3850510.jpg',
    },
    {
      id: 32,
      name: 'Plate',
      price: 2000,
      subName: 'White and black color Plate',
      category: 'Kitchen',
      image:
        'assets/categories_images/resizedimages/pexels-karolina-grabowska-4226876 (1).jpg',
    },
    {
      id: 33,
      name: 'teddy Bear',
      price: 1500,
      subName: 'Brown teddy bear',
      category: 'Toys',
      image:
        'assets/categories_images/resizedimages/pexels-pixabay-207891 (1).jpg',
    },
    {
      id: 34,
      name: 'Teddy bear',
      price: 1000,
      subName: 'Brown Teddy',
      category: 'Toys',
      image:
        'assets/categories_images/resizedimages/pexels-pixabay-264917 (1).jpg',
    },
    {
      id: 35,
      name: 'Crayans',
      price: 3000,
      subName: '12 pack of Crayans',
      category: 'Watches',
      image:
        'assets/categories_images/resizedimages/pexels-cup-of-couple-8014289.jpg',
    },
    {
      id: 36,
      name: 'Hair band',
      price: 1000,
      subName: 'black , green , and peech color bands',
      category: 'Accessories',
      image:
        'assets/categories_images/resizedimages/pexels-skylar-kang-6044144.jpg',
    },
  ];
  constructor() {}
  toggled = false;
  price = 'price';
  isGrid = true;
  ascendingOrder = false;
  descendingOrder = false;
  order = '';
  ngOnInit(): void {}
  togglePriceDropdown() {
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }
  toggleGrid() {
    this.isGrid = true;
  }
  toggleList() {
    this.isGrid = false;
  }
  close(sort: string) {
    this.toggled = false;
    this.order = sort;
  }
}
