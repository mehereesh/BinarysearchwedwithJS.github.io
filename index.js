function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid; // Return the index of the found element
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Return -1 if the element is not found
  }
  
  document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
    let targetInput = Number(document.getElementById('targetInput').value);
    let resultElement = document.getElementById('result');
  
    // Ensure the array is sorted
    arrayInput.sort((a, b) => a - b);
    
    let result = binarySearch(arrayInput, targetInput);
    
    if (result !== -1) {
      resultElement.textContent = `Element found at index ${result}`;
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = "Element not found";
      resultElement.style.color = 'red';
    }
  });
  