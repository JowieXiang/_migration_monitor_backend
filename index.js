const express = require('express'),
    app = express(),
    routes = require('./routes/migration_monitor'),
    PORT = process.env.PORT || 5000;

app.use('/api/migration_monitor', routes);

app.listen(PORT, () => console.log('Server started on ' + PORT));
