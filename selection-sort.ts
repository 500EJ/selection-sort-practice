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
  let divider = 0;
  while (arr[divider] != null) {
    console.log(arr.join(","));
    let minIndex = divider;
    for (let i = divider + 1; i < arr.length; i++) {
      const [current, min] = [arr[i], arr[minIndex]];
      if (current != null && min != null && current < min) minIndex = i;
    }
    const min = arr[minIndex];
    for (let i = minIndex - 1; i >= divider; i--) {
      const current = arr[i];
      if (current != null) arr[i + 1] = current;
    }
    if (min != null) arr[divider] = min;
    divider++;
  }
  return arr;
}
