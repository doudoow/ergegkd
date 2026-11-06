// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "作业精灵",
  "id": "com.pcncn.jj",
  "groups": [
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.pcncn.jj:id/iv_close\"]",
          "activityIds": "com.pcncn.jj.act.AnswerDetail2Activity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/13695874"
        },
        {
          "matches": "[vid=\"ad_close\"][visibleToUser=true]",
          "actionMaximum": 1,
          "activityIds": ".act.HomeNewActivity",
          "matchTime": 10000,
          "fastQuery": true,
          "resetMatch": "app",
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/17265140",
          "exampleUrls": "https://e.gkd.li/b83aa566-8105-4877-abcd-800abfe7634e"
        },
        {
          "matches": "[vid=\"iv_close\"]",
          "activityIds": [
            ".act.AnswerDetail2Activity",
            "com.yfanads.ads.uw.base.inner.YdInterstitialActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/13695874",
            "https://i.gkd.li/i/33297531"
          ]
        },
        {
          "matches": "[vid=\"ad_close\"][clickable=true]",
          "activityIds": [
            ".act.HomeNewActivity",
            "com.qingxia.common.homework.ui.HomeworkRecord4Activity",
            "net.liucong.camera.ext.ScanningQrActivity",
            "com.qingxia.common.book.ui.Collection2Activity",
            "com.qingxia.common.search.ui.Search2Activity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/17265140",
            "https://i.gkd.li/i/33297507",
            "https://i.gkd.li/i/33297555",
            "https://i.gkd.li/i/33315721",
            "https://i.gkd.li/i/33372920"
          ],
          "exampleUrls": "https://e.gkd.li/b83aa566-8105-4877-abcd-800abfe7634e"
        },
        {
          "matches": "[id=\"com.pcncn.jj:id/interact_ad_root\"] [id=\"com.pcncn.jj:id/iv_close\"]",
          "key": 4
        }
      ]
    },
    {
      "name": "弹窗广告",
      "desc": "腾讯广告SDK",
      "enable": false,
      "quickFind": true,
      "key": 1,
      "rules": [
        {
          "matches": "[id=\"com.pcncn.jj:id/interact_ad_root\"] [id=\"com.pcncn.jj:id/iv_close\"]",
          "key": 0
        }
      ]
    }
  ]
});
