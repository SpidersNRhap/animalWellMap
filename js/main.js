// Wait for assets to load
window.onload = function() {
    // Get the map data from the TileMaps object
    const mapData = TileMaps.map;
    
    // Initialize the canvas
    const canvas = document.getElementById('map');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to match the map dimensions
    canvas.width = mapData.width * mapData.tilewidth;
    canvas.height = mapData.height * mapData.tileheight;
    
    // Load the tileset image
    const tilesetImage = new Image();
    tilesetImage.src = 'assets/tileset.png';
    
    tilesetImage.onload = function() {
        // Get the tile layer
        const layer = mapData.layers[0];
        
        // Render each tile
        for (let y = 0; y < layer.height; y++) {
            for (let x = 0; x < layer.width; x++) {
                const tileIndex = x + y * layer.width;
                const tileId = layer.data[tileIndex];
                
                if (tileId === 0) continue; // 0 means no tile
                
                // Calculate position in the tileset
                const tileset = mapData.tilesets[0];
                const localTileId = tileId - tileset.firstgid;
                const tilesetColumns = 16; // From your TSX file
                
                const tilesetX = (localTileId % tilesetColumns) * mapData.tilewidth;
                const tilesetY = Math.floor(localTileId / tilesetColumns) * mapData.tileheight;
                
                // Draw the tile
                ctx.drawImage(
                    tilesetImage,
                    tilesetX, tilesetY, mapData.tilewidth, mapData.tileheight,
                    x * mapData.tilewidth, y * mapData.tileheight, mapData.tilewidth, mapData.tileheight
                );
            }
        }
    };
    
    tilesetImage.onerror = function() {
        console.error('Failed to load tileset image');
    };
};