export const checkNumber = (value: string) => {
    if (parseInt(value, 10).toString() === value) {
        alert(value)
    } else {
        return
    }
}
