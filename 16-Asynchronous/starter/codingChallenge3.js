const imagesElement = document.querySelector('.images');
const createImage = function (imgPath) {
  let imgEl = document.createElement('img');
  //   if (imagesElement.firstElementChild) imgEl = imagesElement.firstElementChild;
  //   else imgEl = document.createElement('img');
  return new Promise(function (resolve, reject) {
    imgEl.addEventListener('load', () => resolve(imgEl));
    imgEl.addEventListener('error', () =>
      reject(new Error(`image ${imgPath} failed to load`))
    );
    imgEl.src = imgPath;
    imgEl.style.opacity = 1;
  });
};

// Coding Challenge #3
// Your tasks:
// PART 1
// 1. Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

let currentImage;
const loadNPause = async function () {
  try {
    let imageElement = await createImage('img/img-1.jpg');
    imagesElement.append(imageElement);
    await wait(2);
    imageElement.style.opacity = 0;
    imageElement = await createImage('img/img-2.jpg');
    imagesElement.append(imageElement);
    await wait(2);
    imageElement.style.opacity = 0;
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// 2. Compare the two versions, think about the big differences, and see which one
// you like more
// 3. Don't forget to test the error handler, and to set the network speed to “Fast 3G”
// in the dev tools Network tab

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths
// 'imgArr'
const loadAll = async function (imagePathArray) {
  const imgs = imagePathArray.map(
    async imagePath => await createImage(imagePath)
  );
  const imgsElements = await Promise.all(imgs);
  imgsElements.forEach(imgEl => imgEl.classList.add('parallel'));
  imagesElement.append(...imgsElements);
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
// 2. Use .map to loop over the array, to load all the images with the
// 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array �
// 5. Add the 'parallel' class to all the images (it has some CSS styles)
// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg']. To test, turn off the 'loadNPause' function
