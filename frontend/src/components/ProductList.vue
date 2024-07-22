<template>
  <div>
    <h1>Products</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }} - {{ product.description }}
        <button @click="deleteProduct(product.id)">Delete</button>
        <button @click="editProduct(product)">Edit</button>
      </li>
    </ul>
    <button @click="showAddProductForm">Add Product</button>

    <div v-if="showForm">
      <h2>{{ editingProduct ? 'Edit Product' : 'Add Product' }}</h2>
      <form @submit.prevent="handleSubmit">
        <input v-model="form.name" placeholder="Name" required />
        <input v-model="form.price" placeholder="Price" type="number" required />
        <input v-model="form.description" placeholder="Description" required />
        <button type="submit">Submit</button>
        <button @click="cancelForm">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  data() {
    return {
      products: [],
      showForm: false,
      editingProduct: null,
      form: {
        name: '',
        price: '',
        description: ''
      }
    };
  },
  methods: {
    async fetchProducts() {
      const response = await api.get('/products');
      this.products = response.data;
    },
    async deleteProduct(id) {
      await api.delete(`/products/${id}`);
      this.fetchProducts();
    },
    editProduct(product) {
      this.showForm = true;
      this.editingProduct = product;
      this.form = { ...product };
    },
    showAddProductForm() {
      this.showForm = true;
      this.editingProduct = null;
      this.form = {
        name: '',
        price: '',
        description: ''
      };
    },
    async handleSubmit() {
      if (this.editingProduct) {
        await api.put(`/products/${this.editingProduct.id}`, this.form);
      } else {
        await api.post('/products', this.form);
      }
      this.showForm = false;
      this.fetchProducts();
    },
    cancelForm() {
      this.showForm = false;
      this.editingProduct = null;
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
