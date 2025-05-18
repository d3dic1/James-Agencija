import express from 'express';
import { auth } from '../middleware/auth';

const router = express.Router();

// Get analytics data
router.get('/', auth, async (_req, res) => {
  try {
    // Mock data - in a real application, this would come from your analytics database
    const analyticsData = {
      websiteTraffic: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [1200, 1900, 1500, 2100, 2400, 2800],
      },
      conversionRates: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [2.1, 2.4, 2.2, 2.8, 3.1, 3.4],
      },
      revenueData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        values: [15000, 22000, 18000, 25000, 30000, 35000],
      },
      trafficSources: {
        labels: ['Organic', 'Direct', 'Referral', 'Social'],
        values: [40, 25, 20, 15],
      },
    };

    res.json(analyticsData);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router; 