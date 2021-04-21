/**
 * Print console the query sql and data
 *
 * @param   {*}  query  query sql
 * @param   {*}  data
 */
export const logDataAndQuery = (query, data) => {
  const { log } = console;

  log("\n");
  log("--------------------------------------------------------");
  log("\n");
  log(">>>>>>>>>>>>>>>>>>>>>Query and Data>>>>>>>>>>>>>>>>>>>>>");
  log("query:", query.toQuery());
  log("data:", data);
  log("<<<<<<<<<<<<<<<<<<<<<Query and Data<<<<<<<<<<<<<<<<<<<<<");
  log("\n");
};
