var fs = require( "fs" );
const dir = "src/images";

fs.readdir( dir, function( err, files ) {
	if ( err ) {
		return console.error( err );
	}

	files.map( function( file ) {
		return { path: dir + "/" + file };
	});

	fs.writeFile( "src/data/images.json", JSON.stringify( { images: files } ), function( err ) {
		if ( err ) {
			return console.log( err );
		}
	
		console.log("The JSON was saved! Check path: /src/data/");
	} );
} );
