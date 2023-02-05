export function selectionSort(arr: number[]): number[] {
  const array = arr.slice();
  const sorted: number[] = [];
  while (array.length) {
    console.log(sorted.join(","));
    let minIndex = 0;
    for (let i = 1; i < array.length; i++) {
      const [current, min] = [array[i], array[minIndex]];
      if (current != null && min != null && current < min) minIndex = i;
    }
    const min = array[minIndex];
    for (let i = minIndex + 1; i < array.length; i++) {
      const current = array[i];
      if (current != null) array[i - 1] = current;
    }
    array.pop();
    if (min != null) sorted.push(min);
  }
  return sorted;
}

export function selectionSortInPlace(arr: number[]): number[] {
  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat
}
