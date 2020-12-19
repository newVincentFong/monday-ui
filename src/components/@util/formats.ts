export function arr2rgb(arr?: number[]) {
    return (arr && arr.length === 3) ? `rgb(${arr[0]},${arr[1]},${arr[2]})` : ''
}