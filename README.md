# Beauty Buffet Salon GH — Frontend Redesign

## Files
- `index.html` — redesigned responsive page
- `style.css` — new international salon visual system
- `script.js` — services, salon booking, separate home service, products, WhatsApp ordering, stylists and gallery

## Important
Your existing image paths are preserved where possible.

### Products
Edit `productsData` near the top of `script.js` to add the client's real products.

Each product supports:
- `name`
- `price`
- `sizes`
- `description`
- `images`
- `badge`

Example:
```js
{
    id: "product-4",
    name: "Real Product Name",
    price: 150,
    currency: "₵",
    sizes: ["250ml", "500ml"],
    description: "Product description.",
    images: [
        "img/product-1.jpg",
        "img/product-2.jpg"
    ],
    badge: "New"
}
```

## WhatsApp
The existing Beauty Buffet WhatsApp number is retained:
`233264174992`

The three flows are now separate:
1. Salon appointment
2. Home service request
3. Product order

All three still open WhatsApp with a structured pre-filled message.

## Deployment
Replace the existing `index.html`, `style.css` and `script.js` with these files, keeping your existing `img` folder beside them.
