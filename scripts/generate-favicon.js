/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "public", "logo-icon.png");
const publicDir = path.join(__dirname, "..", "public");

function buildIco(images) {
  const count = images.length;
  const headerSize = 6 + 16 * count;
  let offset = headerSize;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const buffers = [header];
  images.forEach((img, i) => {
    const entryOffset = 6 + 16 * i;
    header.writeUInt8(img.size === 256 ? 0 : img.size, entryOffset + 0);
    header.writeUInt8(img.size === 256 ? 0 : img.size, entryOffset + 1);
    header.writeUInt8(0, entryOffset + 2);
    header.writeUInt8(0, entryOffset + 3);
    header.writeUInt16LE(1, entryOffset + 4);
    header.writeUInt16LE(32, entryOffset + 6);
    header.writeUInt32LE(img.data.length, entryOffset + 8);
    header.writeUInt32LE(offset, entryOffset + 12);
    offset += img.data.length;
    buffers.push(img.data);
  });

  return Buffer.concat(buffers);
}

async function main() {
  const png16 = await sharp(src).resize(16, 16).png().toBuffer();
  const png32 = await sharp(src).resize(32, 32).png().toBuffer();
  const png180 = await sharp(src).resize(180, 180).png().toBuffer();

  fs.writeFileSync(path.join(publicDir, "favicon-16x16.png"), png16);
  fs.writeFileSync(path.join(publicDir, "favicon-32x32.png"), png32);
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), png180);

  const ico = buildIco([{ size: 32, data: png32 }]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);

  console.log("Favicons generated in public/");
}

main();
