import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 10.99,
  description: 'This is a test product',
};

const mockProductRepository = {
  find: jest.fn().mockResolvedValue([mockProduct]),
  findOne: jest.fn().mockResolvedValue(mockProduct),
  save: jest.fn().mockResolvedValue(mockProduct),
  update: jest.fn().mockResolvedValue(mockProduct),
  delete: jest.fn().mockResolvedValue(mockProduct),
};

describe('ProductController', () => {
  let controller: ProductController;
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductRepository,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all products', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockProduct]);
  });

  it('should return a single product by id', async () => {
    const result = await controller.findOne(1);
    expect(result).toEqual(mockProduct);
  });

  it('should create a new product', async () => {
    const result = await controller.create(mockProduct as any);
    expect(result).toEqual(mockProduct);
  });

  it('should update a product', async () => {
    const result = await controller.update(1, mockProduct as any);
    expect(result).toEqual(mockProduct);
  });

  it('should delete a product', async () => {
    const result = await controller.remove(1);
    expect(result).toEqual(mockProduct);
  });
});