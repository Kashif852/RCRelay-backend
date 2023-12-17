const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const productRoutes = require('./routes/productRoutes');
const discountRoutes = require('./routes/discountRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/products', productRoutes);
app.use('/discounts', discountRoutes);
app.use('/checkout', checkoutRoutes);

app.get('/', (req, res) => {
  res.send('Relay Checkout System Backend is running!');
});

// Global error handling middleware
app.use(errorHandler);

// Server startup
if (require.main === module) {
    // This file is being executed directly, not required as a module
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app;
