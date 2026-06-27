import { Jimp } from 'jimp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processImage() {
    console.log("Reading image...");
    try {
        const image = await Jimp.read("public/logo.png");
        console.log("Resizing image to 800px...");
        image.resize({ w: 800 }); 
        console.log("Saving image as JPG...");
        image.write("public/logo-social.jpg");
        console.log("Successfully resized logo.png to logo-social.jpg!");
    } catch (e) {
        console.error(e);
    }
}

processImage();
