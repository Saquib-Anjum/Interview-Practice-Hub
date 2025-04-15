import express from 'express';
import axios from 'axios'
const getPaginatedBooks = async (req, res) => {
    try {
      // Parse query parameters with default values
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const searchQuery = req.query.q || 'javascript'; // Default search term
      
      // Validate parameters
      if (isNaN(page) || page < 1) {
        return res.status(400).json({ error: 'Invalid page number' });
      }
      
      if (isNaN(limit) || limit < 1 || limit > 100) {
        return res.status(400).json({ error: 'Limit must be between 1 and 100' });
      }
      
      // Calculate offset for public API (many APIs use offset instead of page)
      const offset = (page - 1) * limit;
      
      // Fetch data from public API (using Open Library API as example)
      const response = await axios.get(`https://openlibrary.org/search.json`, {
        params: {
          q: searchQuery,
          limit: limit,
          offset: offset,
          fields: 'key,title,author_name,first_publish_year,subject'
        }
      });
      
      // Extract relevant data from API response
      const books = response.data.docs.map(book => ({
        id: book.key,
        title: book.title,
        authors: book.author_name || ['Unknown'],
        firstPublished: book.first_publish_year,
        subjects: book.subject ? book.subject.slice(0, 3) : []
      }));
      
      // Get total count from API response
      const totalItems = response.data.numFound;
      const totalPages = Math.ceil(totalItems / limit);
      
      // Prepare pagination metadata
      const pagination = {
        currentPage: page,
        itemsPerPage: limit,
        totalItems,
        totalPages,
        hasNextPage: (offset + limit) < totalItems,
        hasPreviousPage: offset > 0
      };
      
      // Send response
      res.json({
        success: true,
        pagination,
        data: books
      });
      
    } catch (error) {
      console.error('Error fetching books:', error.message);
      res.status(500).json({ 
        error: 'Failed to fetch books',
        details: error.message
      });
    }
  };

export {getPaginatedBooks}