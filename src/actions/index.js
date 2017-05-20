/**
 * Применяет изменение рейтинга фотографии. 
 * @param {string} id ИД фотографии. 
 * @param {number} rating Рейтинг. 
 */
export const changeRating = (id, rating) => ({
  type: 'CHANGE_RATING',
  id,
  rating
})