import moment from "moment";
// 简单的日期过滤器
export function date(value) {
  return moment(value).format("L");
}
