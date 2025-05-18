import express from 'express';
import { Blog } from '../models/Blog';
import { auth } from '../middleware/auth';

const router = express.Router();

// Get all blog posts (with pagination and filters)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const status = req.query.status as string;
    const tag = req.query.tag as string;
    const search = req.query.search as string;

    const query: any = {};

    if (status) query.status = status;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ];
    }

    const total = await Blog.countDocuments(query);
    const posts = await Blog.find(query)
      .populate('author', 'name email')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return res.json({
      posts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalPosts: total,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

// Get single blog post
router.get('/:slug', async (req, res) => {
  try {
    const post = await Blog.findOne({ slug: req.params.slug }).populate(
      'author',
      'name email'
    );

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    return res.json(post);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

// Create new blog post
router.post('/', auth, async (req, res) => {
  try {
    const {
      title,
      content,
      excerpt,
      featuredImage,
      tags,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = req.body;

    const post = new Blog({
      title,
      content,
      excerpt,
      featuredImage,
      tags,
      author: req.user._id,
      seoTitle,
      seoDescription,
      seoKeywords,
    });

    await post.save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

// Update blog post
router.put('/:id', auth, async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if user is author or admin
    if (
      post.author.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    const {
      title,
      content,
      excerpt,
      featuredImage,
      tags,
      status,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = req.body;

    if (title) post.title = title;
    if (content) post.content = content;
    if (excerpt) post.excerpt = excerpt;
    if (featuredImage) post.featuredImage = featuredImage;
    if (tags) post.tags = tags;
    if (status) post.status = status;
    if (seoTitle) post.seoTitle = seoTitle;
    if (seoDescription) post.seoDescription = seoDescription;
    if (seoKeywords) post.seoKeywords = seoKeywords;

    await post.save();
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

// Delete blog post
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if user is author or admin
    if (
      post.author.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    await post.deleteOne();
    return res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
});

export default router; 