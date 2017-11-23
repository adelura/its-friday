var fs = require( "fs" );

fs.readdir( "src/images", function( err, files ) {
	if ( err ) {
		return console.error( err );
	}

	var json = { "images": [] };

	files.map( function( file ) {
		json.images.push( { "path": "src/images/" + file } );
	});

	fs.writeFile( "src/data/images.json", JSON.stringify( json ), function( err ) {
		if ( err ) {
			return console.log( err );
		}
	
		console.log("The JSON was saved! Check path: /src/data/");
	} );
} );
