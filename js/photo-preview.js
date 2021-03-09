const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarFileChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const HousingPhotoFileChooser = document.querySelector('#images');
const HousingPhotoPreview = document.querySelector('.ad-form__photo img');

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
      img.classList.remove('visually-hidden')
    }
  });
}

setImagePreview(avatarFileChooser, avatarPreview)
setImagePreview(HousingPhotoFileChooser, HousingPhotoPreview)

