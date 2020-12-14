// Is Today is Public Holiday (mock up version)
// Copy this code to chrome dev
// url : https://www.bot.or.th/Thai/FinancialInstitutions/FIholiday/Pages/${year}.aspx
// year start from 1992 to 2021
const monthToNumber = (month) => {
  const monthList = {
    มกราคม: 1,
    กุมภาพันธ์: 2,
    มีนาคม: 3,
    เมษายน: 4,
    พฤษภาคม: 5,
    มิถุนายน: 6,
    กรกฎาคม: 7,
    สิงหาคม: 8,
    กันยายน: 9,
    ตุลาคม: 10,
    พฤศจิกายน: 11,
    ธันวาคม: 12,
  }
  return monthList[month]
}
const currentYear = window.location.href.split('.aspx')[0].split('Pages/')[1]
const addZero = (number) => {
  let temp = '0' + number
  return temp.substring(temp.length - 2)
}
const getData = () => {
  let arr = []
  document
    .querySelectorAll(
      '.bot-rteTableOddRow-default,.bot-rteTableEvenRow-default,.bot-rteTableFooterRow-default'
    )
    .forEach((temp) => {
      let t = temp.cells[2].innerHTML + ' ' + temp.cells[3].innerHTML
      t = t.replaceAll(/<br>/g,'')
      arr.push(t)
    })
  return arr
}
const modifyData = () => {
  let list = []
  const arr = getData()
  arr.map((el) => {
    let temp = el.split(' ')
    list.push(
      addZero(monthToNumber(temp[1].trim().substring(1))) +
        '/' +
        addZero(temp[0]) +
        '/' +
        currentYear
    )
  })
  return list
}
const list = modifyData()
console.log(list)
copy(list)