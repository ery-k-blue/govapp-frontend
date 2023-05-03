import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const Profile: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <h2>議員詳細情報</h2>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={10}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    プロフィール
                  </Typography>

                  <Typography variant="h5" component="div">
                    青柳 仁士（あおやぎ ひとし）
                  </Typography>

                  <Typography sx={{ mt: 1.5 }}>
                    小選挙区（大阪府第十四区）選出、日本維新の会
                  </Typography>

                  <Typography sx={{ mt: 1.5, fontSize: 14 }}>
                    昭和五十三年十一月東京都立川市に生る、早稲田大学政治経済学部卒業、デューク大学公共政策大学院卒業、国際協力機構（JICA）職員、国連職員、著書「小さな会社のSDGs実践の教科書」○当選一回（49）
                  </Typography>
                </Grid>

                <Grid item xs={2}>
                  <Image
                    src="/img/giin_sample.jpeg"
                    alt="議員画像"
                    width={100}
                    height={140}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                答弁
              </Typography>
              <Typography variant="h5" component="div">
                質問一覧
              </Typography>
              <Typography sx={{ mt: 1.5 }}>質問1</Typography>
              <Typography sx={{ mt: 1.5 }}>質問2</Typography>
              <Typography sx={{ mt: 1.5 }}>質問3</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">さらに見る</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                答弁
              </Typography>
              <Typography variant="h5" component="div">
                回答一覧
              </Typography>
              <Typography sx={{ mt: 1.5 }}>回答1</Typography>
              <Typography sx={{ mt: 1.5 }}>回答2</Typography>
              <Typography sx={{ mt: 1.5 }}>回答3</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">さらに見る</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
