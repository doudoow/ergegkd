// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "库街区",
  "id": "com.kurogame.kjq",
  "groups": [
    {
      "name": "功能类-自动签到",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[vid=\"sign_click\"][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/15521224"
        },
        {
          "matches": "[vid=\"bt_close\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15521225"
        }
      ]
    },
    {
      "name": "全屏广告-弹窗广告",
      "desc": "点击关闭",
      "enable": false,
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"close\"]",
          "activityIds": "com.kurogame.kjq.MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15629864",
          "exampleUrls": "https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3",
          "key": 0
        },
        {
          "matches": "[vid=\"close\"]",
          "activityIds": ".MainActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/15629864",
          "exampleUrls": "https://m.gkd.li/57941037/d9c598fc-5bd4-4773-8db1-316b8f7155c3",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-鸣潮自动签到",
      "desc": "①点击签到 ②签到成功-点击x掉 ③按[返回键]",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[text=\"《鸣潮》每日签到工具\"] >6 ListView[childCount=12] > @View[childCount=3][visibleToUser=true] > TextView[width<150] <3 * + View[childCount=2]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/15632005",
            "https://i.gkd.li/i/15632902"
          ]
        },
        {
          "matches": "@TextView - * > [text=\"签到成功！\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/15632138"
        },
        {
          "matches": "View[text=\"《鸣潮》每日签到工具\"][visibleToUser=true]",
          "action": "back",
          "preKeys": [
            3
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/15632250"
        },
        {
          "matches": "[childCount=1][getChild(0).getChild(1).text=\"《鸣潮》每日签到工具\"] +(2,3) View >3 @View[childCount=3][height>250][getChild(2).width<150][visibleToUser=true]",
          "key": 3,
          "name": "①点击签到",
          "snapshotUrls": [
            "https://i.gkd.li/i/15632005",
            "https://i.gkd.li/i/32262391",
            "https://i.gkd.li/i/34076762",
            "https://i.gkd.li/i/34198526"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/15632902"
        },
        {
          "matches": "@TextView - * > [text=\"签到成功！\"]",
          "preKeys": [
            3
          ],
          "key": 4,
          "name": "②签到成功-点击x掉",
          "snapshotUrls": "https://i.gkd.li/i/15632138"
        },
        {
          "matches": "View[text=\"《鸣潮》每日签到工具\"][visibleToUser=true]",
          "action": "back",
          "preKeys": [
            4
          ],
          "key": 5,
          "name": "③按[返回键]",
          "snapshotUrls": "https://i.gkd.li/i/15632250"
        }
      ]
    }
  ]
});
