const { dest, src } = require("gulp");


// TODO optimize svgs/images
const images = () => {
    return src("./src/images/*.*")
    .pipe(dest("./src/_includes/images"))
}

module.exports = images;