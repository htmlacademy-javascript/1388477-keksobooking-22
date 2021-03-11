const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
export const avatarFileChooser = document.querySelector('#avatar');
export const avatarPreview = document.querySelector('.ad-form-header__preview img');
export const housingPhotoFileChooser = document.querySelector('#images');
export const housingPhotoPreview = document.querySelector('.ad-form__photo img');

const setImagePreview = (input, img) => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        img.src = reader.result;
      });

      reader.readAsDataURL(file);
    }

    if (img.classList.contains('visually-hidden')) {
      img.classList.remove('visually-hidden');
    }
  });
}

export const resetPreview = (input,image) => {
  input.value = '';
  image.src = 'img/muffin-grey.svg'

}

setImagePreview(avatarFileChooser, avatarPreview);
setImagePreview(housingPhotoFileChooser, housingPhotoPreview);

