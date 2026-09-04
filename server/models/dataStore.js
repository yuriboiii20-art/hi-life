import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Ensure data directory and orders.json exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(ORDERS_FILE)) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify({}, null, 2), 'utf8');
}

/**
 * Lightweight JSON File-Backed Persistent Store with memory cache
 */
class DataStore {
  constructor() {
    this.cache = new Map();
    this.loadFromDisk();
  }

  loadFromDisk() {
    try {
      if (fs.existsSync(ORDERS_FILE)) {
        const raw = fs.readFileSync(ORDERS_FILE, 'utf8');
        const data = JSON.parse(raw || '{}');
        this.cache.clear();
        for (const [key, val] of Object.entries(data)) {
          this.cache.set(key, val);
        }
      }
    } catch (err) {
      console.error('[DataStore] Error loading orders from disk:', err);
    }
  }

  saveToDisk() {
    try {
      const obj = {};
      for (const [key, val] of this.cache.entries()) {
        obj[key] = val;
      }
      fs.writeFileSync(ORDERS_FILE, JSON.stringify(obj, null, 2), 'utf8');
    } catch (err) {
      console.error('[DataStore] Error persisting orders to disk:', err);
    }
  }

  createOrder(order) {
    this.cache.set(order.id, order);
    this.saveToDisk();
    return order;
  }

  getOrder(id) {
    return this.cache.get(id) || null;
  }

  updateOrder(id, updates) {
    const existing = this.cache.get(id);
    if (!existing) return null;
    const updated = {
      ...existing,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    this.cache.set(id, updated);
    this.saveToDisk();
    return updated;
  }

  getOrdersByGuestSession(guestSessionId) {
    const results = [];
    for (const order of this.cache.values()) {
      if (order.guestSessionId === guestSessionId) {
        results.push(order);
      }
    }
    return results;
  }
}

export const dataStore = new DataStore();
