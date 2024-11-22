const Sheet = require('../models/workSheetModel');


exports.createSheet = async (req, res) => {
    Sheet.create(req.body, (err, reslt) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({id : reslt.insertId, ...req.body}); 
    });
};

exports.getAllSheets = async (req, res) => {
    try {
      const result = await Sheet.findAll();  // Fetch all sheets
      if (!result || result.length === 0) {
        return res.status(200).send('No data found');
      }
      return res.status(200).json(result);  // Return the data as JSON
    } catch (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data from database');
    }
};

exports.getSheetById = async (req, res) => {
    Sheet.findById (req.params.id, (err, result) => {
        if(err) return res.status(500).send(err);
        if(result.length === 0 ) return res.status(404).send("Sheet Not Found");
        res.status(200).json(result[0]);
    });
};

exports.updateSheet = async (req, res) => {
    Sheet.update(req.params.id,req.body, (err, result) => {
        if(err) return res.status(500).send(err);
        if(result.affectedRows === 0) return res.status(404).send('Sheet not found');
        res.status(200).send({id: req.params.id, ...req.body});
    });
};

exports.deleteSheet = async (req, res) => {
    Sheet.delete (req.params.id, (err, result) => {
        if(err) return res.send(500).send(err);
        if(result.affectedRows === 0) return res.status(404).send("Sheet not found");
        res.status(200).send("Item deleted");
    });
};