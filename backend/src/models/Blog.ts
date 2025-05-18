import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: mongoose.Types.ObjectId;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  publishedAt?: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 200,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [{
      type: String,
      trim: true,
    }],
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
    seoTitle: {
      type: String,
      required: true,
    },
    seoDescription: {
      type: String,
      required: true,
      maxlength: 160,
    },
    seoKeywords: [{
      type: String,
      trim: true,
    }],
    publishedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from title before saving
blogSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

// Set publishedAt when status changes to published
blogSchema.pre('save', function(next) {
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

export const Blog = mongoose.model<IBlog>('Blog', blogSchema); 