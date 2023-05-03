import * as React from "react";
import {
  Container,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

const rows = [
  {
    id: 1,
    icon: "",
    fullName_kanzi: "逢沢 一郎",
    fullname_kana: "あいさわ いちろう",
    politicalParty: "自民",
    questionNum: 35,
    deciationValue: 12,
  },
  {
    id: 2,
    icon: "",
    fullName_kanzi: "青柳 仁士",
    fullname_kana: "あおやぎ ひとし",
    politicalParty: "維新",
    questionNum: 42,
    deciationValue: 43,
  },
  {
    id: 3,
    icon: "",
    fullName_kanzi: "青柳 陽一郎",
    fullname_kana: "あおやぎ よういちろう",
    politicalParty: "立憲",
    questionNum: 45,
    deciationValue: 52,
  },
  {
    id: 1,
    icon: "",
    fullName_kanzi: "逢沢 一郎",
    fullname_kana: "あいさわ いちろう",
    politicalParty: "自民",
    questionNum: 35,
    deciationValue: 12,
  },
  {
    id: 2,
    icon: "",
    fullName_kanzi: "青柳 仁士",
    fullname_kana: "あおやぎ ひとし",
    politicalParty: "維新",
    questionNum: 42,
    deciationValue: 43,
  },
  {
    id: 3,
    icon: "",
    fullName_kanzi: "青柳 陽一郎",
    fullname_kana: "あおやぎ よういちろう",
    politicalParty: "立憲",
    questionNum: 45,
    deciationValue: 52,
  },
  {
    id: 1,
    icon: "",
    fullName_kanzi: "逢沢 一郎",
    fullname_kana: "あいさわ いちろう",
    politicalParty: "自民",
    questionNum: 35,
    deciationValue: 12,
  },
  {
    id: 2,
    icon: "",
    fullName_kanzi: "青柳 仁士",
    fullname_kana: "あおやぎ ひとし",
    politicalParty: "維新",
    questionNum: 42,
    deciationValue: 43,
  },
  {
    id: 3,
    icon: "",
    fullName_kanzi: "青柳 陽一郎",
    fullname_kana: "あおやぎ よういちろう",
    politicalParty: "立憲",
    questionNum: 45,
    deciationValue: 52,
  },
];

export default function QuestionNumTable() {
  return (
    <Container maxWidth="md">
      <h2>質問数ランキング</h2>

      <p>
        ここに質問数とはなにか、どのようなデータを集計しているのかの説明文。
      </p>
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>氏名</TableCell>
              <TableCell>ふりがな</TableCell>
              <TableCell>会派</TableCell>
              <TableCell align="right">質問数</TableCell>
              <TableCell align="right">偏差値</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link href={`/profile/${row.id}`}>
                    <InsertEmoticonIcon />
                  </Link>
                </TableCell>
                <TableCell>{row.fullName_kanzi}</TableCell>
                <TableCell>{row.fullname_kana}</TableCell>
                <TableCell align="right">{row.politicalParty}</TableCell>
                <TableCell align="right">{row.questionNum}</TableCell>
                <TableCell align="right">{row.deciationValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
