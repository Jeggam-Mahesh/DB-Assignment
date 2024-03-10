## 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
 The relationship between the "Product" and "Product_Category" entities is established through the category_id field in the "Product" schema.
 Let's break down the relationship:

1.Product Entity:

The "Product" entity has a field called category_id, which is a reference to the "Product_Category" entity.
This "category_id" field defined in Product table(schema) is indicating that it stores the unique identifier (_id) of a document in the "Product_Category" collection.

2.Product_Category Entity:

The "Product_Category" entity doesn't directly reference the "Product" entity. Instead, it serves as the referenced collection for the category_id field in the "Product" entity.
The "_id" field in the "Product_Category" entity acts as the primary key, and it is referenced by the category_id field in the "Product" entity.

This relationship allows you to associate each product with a specific product category. When you query a "Product" document, you can use Mongoose's populate method to retrieve the actual details of the associated product category, making it easy to access information about the category to which a product belongs.

## 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
 
To ensure that each product in the "Product" table has a valid category assigned to it, you can use Mongoose's validation mechanisms. Specifically, you can utilize the validate option and create a custom validator function to check whether the referenced category ID exists in the "Product_Category" collection. 

 schema code for ensuring valid product category:

    category_id: {
     type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductCategory',
       required: true,
        validate: {
         validator: async function (value) {
          const category = await mongoose.model('ProductCategory').findById(value);
           return category !== null;
      },
      message: 'Invalid category ID. Please provide a valid category ID.'
    }
  },