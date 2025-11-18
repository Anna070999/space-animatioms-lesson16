const getLoremImage = () => {
    const images = document.querySelectorAll('img');
    
    images.forEach(item => {
        if (!item.getAttribute('src')) {
            fetch('https://picsum.photos/640/360')
                .then(response => response.blob())
                .then(blob => item.src = URL.createObjectURL(blob))
                .catch(error => item.src = "assets/img/cat-scottish.webp");
        }
    });
};

document.querySelectorAll('img').length > 0 ? getLoremImage() : null;
