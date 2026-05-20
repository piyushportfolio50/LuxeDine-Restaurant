// Restaurant data using only images from provided assets

export const heroImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-K31IstQpnyBEcDrI12PK1qROq51k2T.png"

export const images = {
  // From image 2 - Hero background
  hero: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-K31IstQpnyBEcDrI12PK1qROq51k2T.png",
  
  // Food images from image 3
  grapes: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
  
  // We'll use sections of the component kit image
  componentKit: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wovZVft02UBukoAN0TIJ7QYR8kq1P8.png",
}

export const menuItems = [
  {
    id: "1",
    name: "Grilled Salmon",
    category: "Main Course",
    description: "Fresh Atlantic salmon with herb butter sauce and seasonal vegetables",
    price: 1999,
    image: "/images/salmon.jpg",
    calories: 450,
    cookTime: "25 min",
    serves: 1,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Ribeye Steak",
    category: "Main Course",
    description: "Premium aged ribeye steak with truffle mashed potatoes",
    price: 2499,
    image: "/images/steak.jpg",
    calories: 680,
    cookTime: "30 min",
    serves: 1,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Truffle Pasta",
    category: "Main Course",
    description: "Handmade pasta with black truffle cream sauce",
    price: 1599,
    image: "/images/pasta.jpg",
    calories: 520,
    cookTime: "20 min",
    serves: 1,
    isAvailable: true,
  },
  {
    id: "4",
    name: "Burrata Salad",
    category: "Starters",
    description: "Fresh burrata with heirloom tomatoes and basil pesto",
    price: 1699,
    image: "/images/salad.jpg",
    calories: 320,
    cookTime: "10 min",
    serves: 1,
    isAvailable: true,
  },
  {
    id: "5",
    name: "Chocolate Lava Cake",
    category: "Desserts",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 649,
    image: "/images/cake.jpg",
    calories: 480,
    cookTime: "15 min",
    serves: 1,
    isAvailable: true,
  },
  {
    id: "6",
    name: "Mojito",
    category: "Drinks",
    description: "Classic Cuban cocktail with fresh mint and lime",
    price: 399,
    image: "/images/mojito.jpg",
    calories: 120,
    cookTime: "5 min",
    serves: 1,
    isAvailable: true,
  },
  {
    id: "7",
    name: "Bruschetta Classica",
    category: "Starters",
    description: "Toasted ciabatta with fresh tomatoes, garlic, and basil",
    price: 549,
    image: "/images/bruschetta.jpg",
    calories: 220,
    cookTime: "10 min",
    serves: 2,
    isAvailable: true,
  },
  {
    id: "8",
    name: "Crispy Calamari",
    category: "Starters",
    description: "Tender calamari rings with spicy aioli dipping sauce",
    price: 699,
    image: "/images/calamari.jpg",
    calories: 380,
    cookTime: "15 min",
    serves: 2,
    isAvailable: true,
  },
]

export const chefs = [
  {
    id: "1",
    name: "John Smith",
    role: "Head Chef",
    specialty: "French Cuisine & Grills",
    bio: "With over 20 years of culinary experience, Chef John brings passion and precision to every dish.",
    image: "/images/chef1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "2",
    name: "Michael Brown",
    role: "Sous Chef",
    specialty: "Italian & Pasta",
    bio: "Trained in Italy, Michael specializes in authentic Italian cuisine and handmade pasta.",
    image: "/images/chef2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: "3",
    name: "David Wilson",
    role: "Pastry Chef",
    specialty: "Desserts & Baking",
    bio: "David creates exquisite desserts that are both beautiful and delicious.",
    image: "/images/chef3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
]

export const blogPosts = [
  {
    id: "1",
    title: "The Art of Fine Dining",
    excerpt: "Discover the secrets behind creating an unforgettable dining experience.",
    content: "Fine dining is more than just food—it's an experience that engages all your senses...",
    author: "Admin",
    date: "May 28, 2024",
    readTime: "5 Min Read",
    category: "Food",
    image: "/images/blog1.jpg",
  },
  {
    id: "2",
    title: "10 Secrets to a Perfect Steak",
    excerpt: "Learn the techniques that our chefs use to create the perfect steak every time.",
    content: "A perfectly cooked steak is the hallmark of any great steakhouse...",
    author: "Chef John",
    date: "May 25, 2024",
    readTime: "4 Min Read",
    category: "Tips",
    image: "/images/blog2.jpg",
  },
  {
    id: "3",
    title: "Healthy Eating Tips",
    excerpt: "Maintaining a healthy diet without compromising on taste.",
    content: "Eating healthy doesn't mean you have to give up on delicious food...",
    author: "Nutritionist",
    date: "May 20, 2024",
    readTime: "3 Min Read",
    category: "Health",
    image: "/images/blog3.jpg",
  },
]

export const galleryImages = [
  { id: "1", src: "/images/gallery1.jpg", category: "Food" },
  { id: "2", src: "/images/gallery2.jpg", category: "Interior" },
  { id: "3", src: "/images/gallery3.jpg", category: "Food" },
  { id: "4", src: "/images/gallery4.jpg", category: "Events" },
  { id: "5", src: "/images/gallery5.jpg", category: "Food" },
  { id: "6", src: "/images/gallery6.jpg", category: "Interior" },
  { id: "7", src: "/images/gallery7.jpg", category: "Food" },
  { id: "8", src: "/images/gallery8.jpg", category: "Events" },
]

export const events = [
  {
    id: "1",
    title: "Weekend Special",
    description: "Get 20% off on all orders above ₹4,000",
    details: "Valid: Sat–Sun | Min order ₹4,000",
    image: "/images/event1.jpg",
  },
  {
    id: "2",
    title: "Live Music Night",
    description: "Enjoy live music every Friday evening",
    details: "7:00 PM – 11:00 PM | Entry Free with dining",
    image: "/images/event2.jpg",
  },
  {
    id: "3",
    title: "Happy Hours",
    description: "10% off on all cocktails & mocktails",
    details: "Mon–Thu: 4:00 PM – 7:00 PM",
    image: "/images/event3.jpg",
  },
]

export const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Master Chefs" },
  { value: 10, suffix: "K+", label: "Happy Customers" },
  { value: 25, suffix: "+", label: "Awards Won" },
]

export const tables = Array.from({ length: 16 }, (_, i) => ({
  id: `table-${i + 1}`,
  number: `T-${String(i + 1).padStart(2, '0')}`,
  capacity: i < 4 ? 2 : i < 10 ? 4 : 6,
  floor: i < 8 ? "Ground Floor" : "First Floor",
  isBooked: [0, 3, 6, 8, 13].includes(i),
}))

export const contactInfo = {
  phone: "+1 234 567 8900",
  email: "info@restaurant.com",
  address: "123 Food Street, Flavor Town, Delicious City, DC 12345",
  hours: "Mon - Sun : 10:00 AM - 11:00 PM",
}
