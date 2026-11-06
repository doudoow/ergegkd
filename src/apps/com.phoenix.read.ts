// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "红果免费短剧",
  "id": "com.phoenix.read",
  "groups": [
    {
      "name": "功能类-[上滑]继续看短剧",
      "desc": "①读秒结束后[上滑] ②未显示[选集]时,每5秒[上滑]1次",
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"上滑继续观看短剧\"][visibleToUser=true]",
          "key": 0,
          "name": "①读秒结束后[上滑]",
          "snapshotUrls": "https://i.gkd.li/i/32430183",
          "excludeSnapshotUrls": "https://i.gkd.li/i/32430193",
          "exampleUrls": "https://e.gkd.li/248c4c7b-469c-459b-a489-23c123f35766"
        },
        {
          "matches": "[text=\"选集\"][visibleToUser=false]",
          "excludeMatches": [
            "[text=\"选集\" || text*=\"剧评\"][visibleToUser=true]",
            "[text*=\"剧备字\" || text=\"全屏观看\"][height>0]",
            "TextView[text$=\"%\"][text.length<5][height>-50 && height<1]"
          ],
          "actionDelay": 1000,
          "actionCd": 4000,
          "key": 1,
          "name": "②5秒[上滑]1次",
          "snapshotUrls": [
            "https://i.gkd.li/i/32429827",
            "https://i.gkd.li/i/32429877",
            "https://i.gkd.li/i/32429830"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/32430107",
            "https://i.gkd.li/i/34210794",
            "https://i.gkd.li/i/32434872",
            "https://i.gkd.li/i/33193929",
            "https://i.gkd.li/i/32683026",
            "https://i.gkd.li/i/33289353",
            "https://i.gkd.li/i/34212237"
          ],
          "exampleUrls": [
            "https://e.gkd.li/0128820c-4e8d-44ed-9ebc-ef2d5a062e26",
            "https://e.gkd.li/b70813b8-1377-4210-be6c-fe04f3c9c701",
            "https://e.gkd.li/38c5c9d1-9962-4e07-a7de-49999d3ddf2b"
          ]
        }
      ]
    },
    {
      "name": "权限提示-通知权限",
      "desc": "点击[取消]",
      "matchTime": 10000,
      "actionMaximum": 1,
      "resetMatch": "app",
      "key": 1,
      "rules": [
        {
          "matches": [
            "[text*=\"开启\"][text*=\"提醒\" || text*=\"通知\"]",
            "[text=\"取消\"]"
          ],
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/33926663",
          "key": 0
        }
      ]
    },
    {
      "name": "局部广告-阅读-底部卡片广告",
      "desc": "点击X",
      "enable": false,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": "ImageView < @ViewGroup <3 ViewGroup[childCount=5] <n * <n * <n * <n * <n * <n * <n * <n * <n * <n [id=\"com.phoenix.read:id/root_view\"]",
          "actionDelay": 200,
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/27986281"
        },
        {
          "matches": "TextView[text=\"关闭此广告\"]",
          "preKeys": 0,
          "snapshotUrls": "https://i.gkd.li/i/28024153",
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-阅读-视频广告",
      "desc": "滑动翻页",
      "enable": false,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text=\"点击关闭广告并退出小说\"][visibleToUser=true]",
          "excludeMatches": "[text$=\"秒后，继续阅读下一页\"]",
          "action": "swipe",
          "forcedTime": 3600000,
          "snapshotUrls": "https://i.gkd.li/i/27988263",
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/27988163",
            "https://i.gkd.li/i/28187435",
            "https://i.gkd.li/i/28187442"
          ],
          "key": 0
        }
      ]
    }
  ]
});
