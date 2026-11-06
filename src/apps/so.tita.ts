// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "tita搜索",
  "id": "so.tita",
  "groups": [
    {
      "name": "未分类-应用内第三方 SDK 广告",
      "enable": false,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"so.tita:id/flyt_banner\"] >n FrameLayout > FrameLayout +n FrameLayout > ImageView",
          "activityIds": "so.tita.view.activity.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12800404"
        },
        {
          "matches": [
            "[id=\"so.tita:id/flyt_native\"] >n LinearLayout > FrameLayout + LinearLayout + FrameLayout[visibleToUser=true]",
            "[id=\"so.tita:id/flyt_native\"] >n FrameLayout > ImageView +n FrameLayout > ImageView[visibleToUser=true]"
          ],
          "actionDelay": 1000,
          "activityIds": [
            "so.tita.view.activity.HomeActivity",
            "so.tita.view.activity.EpisodeActivity",
            "so.tita.view.activity.SearchActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12800504",
            "https://i.gkd.li/i/12800437",
            "https://i.gkd.li/i/12800682",
            "https://i.gkd.li/i/12800590",
            "https://i.gkd.li/i/12800794",
            "https://i.gkd.li/i/12800914"
          ]
        },
        {
          "matches": "@ImageView < FrameLayout + ImageView",
          "activityIds": [
            "so.tita.view.activity.WebVersionActivity",
            "so.tita.view.activity.RankListActivity",
            "so.tita.view.activity.CollectActivity",
            "so.tita.view.activity.HistoryActivity",
            "so.tita.view.activity.AllDownParentActivity",
            "so.tita.view.activity.EpisodeActivity",
            "so.tita.view.activity.KSYPlayerActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12800486",
            "https://i.gkd.li/i/12800559",
            "https://i.gkd.li/i/12800633",
            "https://i.gkd.li/i/12800655",
            "https://i.gkd.li/i/12800673",
            "https://i.gkd.li/i/12800732",
            "https://i.gkd.li/i/12800739"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "so.tita.view.activity.RankListActivity",
            "so.tita.utils.cast.ui.CastPlayActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/12800543",
            "https://i.gkd.li/i/12800571"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "so.tita.view.activity.CollectActivity",
            "so.tita.view.activity.HistoryActivity",
            "so.tita.view.activity.AllDownParentActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/i/12800616",
            "https://i.gkd.li/i/12800642",
            "https://i.gkd.li/i/12800659"
          ]
        }
      ]
    },
    {
      "name": "未分类-观看视频去除广告提示弹窗",
      "enable": false,
      "key": 1,
      "rules": [
        {
          "matches": "@[text=\"取 消\"] + View + [text=\"确 定\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "全屏广告-应用内第三方 SDK 广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"so.tita:id/flyt_banner\"] >n FrameLayout > FrameLayout +n FrameLayout > ImageView",
          "activityIds": "so.tita.view.activity.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12800404"
        },
        {
          "matches": [
            "[id=\"so.tita:id/flyt_native\"] >n LinearLayout > FrameLayout + LinearLayout + FrameLayout[visibleToUser=true]",
            "[id=\"so.tita:id/flyt_native\"] >n FrameLayout > ImageView +n FrameLayout > ImageView[visibleToUser=true]"
          ],
          "actionDelay": 1000,
          "activityIds": [
            "so.tita.view.activity.HomeActivity",
            "so.tita.view.activity.EpisodeActivity",
            "so.tita.view.activity.SearchActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800504",
            "https://i.gkd.li/import/12800437",
            "https://i.gkd.li/import/12800682",
            "https://i.gkd.li/import/12800590",
            "https://i.gkd.li/import/12800794",
            "https://i.gkd.li/import/12800914"
          ]
        },
        {
          "matches": "@ImageView < FrameLayout + ImageView",
          "activityIds": [
            "so.tita.view.activity.WebVersionActivity",
            "so.tita.view.activity.RankListActivity",
            "so.tita.view.activity.CollectActivity",
            "so.tita.view.activity.HistoryActivity",
            "so.tita.view.activity.AllDownParentActivity",
            "so.tita.view.activity.EpisodeActivity",
            "so.tita.view.activity.KSYPlayerActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800486",
            "https://i.gkd.li/import/12800559",
            "https://i.gkd.li/import/12800633",
            "https://i.gkd.li/import/12800655",
            "https://i.gkd.li/import/12800673",
            "https://i.gkd.li/import/12800732",
            "https://i.gkd.li/import/12800739"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "so.tita.view.activity.RankListActivity",
            "so.tita.utils.cast.ui.CastPlayActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800543",
            "https://i.gkd.li/import/12800571"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "so.tita.view.activity.CollectActivity",
            "so.tita.view.activity.HistoryActivity",
            "so.tita.view.activity.AllDownParentActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800616",
            "https://i.gkd.li/import/12800642",
            "https://i.gkd.li/import/12800659"
          ]
        }
      ]
    },
    {
      "name": "全屏广告-观看视频去除广告提示弹窗",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "@[text=\"取 消\"] + View + [text=\"确 定\"]",
          "key": 0
        }
      ]
    },
    {
      "name": "应用内第三方 SDK 广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"so.tita:id/flyt_banner\"] >n FrameLayout > FrameLayout +n FrameLayout > ImageView",
          "activityIds": "so.tita.view.activity.HomeActivity",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12800404"
        },
        {
          "matches": [
            "[id=\"so.tita:id/flyt_native\"] >n LinearLayout > FrameLayout + LinearLayout + FrameLayout[visibleToUser=true]",
            "[id=\"so.tita:id/flyt_native\"] >n FrameLayout > ImageView +n FrameLayout > ImageView[visibleToUser=true]"
          ],
          "actionDelay": 1000,
          "activityIds": [
            "so.tita.view.activity.HomeActivity",
            "so.tita.view.activity.EpisodeActivity",
            "so.tita.view.activity.SearchActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800504",
            "https://i.gkd.li/import/12800437",
            "https://i.gkd.li/import/12800682",
            "https://i.gkd.li/import/12800590",
            "https://i.gkd.li/import/12800794",
            "https://i.gkd.li/import/12800914"
          ]
        },
        {
          "matches": "@ImageView < FrameLayout + ImageView",
          "activityIds": [
            "so.tita.view.activity.WebVersionActivity",
            "so.tita.view.activity.RankListActivity",
            "so.tita.view.activity.CollectActivity",
            "so.tita.view.activity.HistoryActivity",
            "so.tita.view.activity.AllDownParentActivity",
            "so.tita.view.activity.EpisodeActivity",
            "so.tita.view.activity.KSYPlayerActivity"
          ],
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800486",
            "https://i.gkd.li/import/12800559",
            "https://i.gkd.li/import/12800633",
            "https://i.gkd.li/import/12800655",
            "https://i.gkd.li/import/12800673",
            "https://i.gkd.li/import/12800732",
            "https://i.gkd.li/import/12800739"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "so.tita.view.activity.RankListActivity",
            "so.tita.utils.cast.ui.CastPlayActivity"
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800543",
            "https://i.gkd.li/import/12800571"
          ]
        },
        {
          "matches": "ImageView - FrameLayout > FrameLayout > FrameLayout > ImageView",
          "activityIds": [
            "so.tita.view.activity.CollectActivity",
            "so.tita.view.activity.HistoryActivity",
            "so.tita.view.activity.AllDownParentActivity"
          ],
          "key": 4,
          "snapshotUrls": [
            "https://i.gkd.li/import/12800616",
            "https://i.gkd.li/import/12800642",
            "https://i.gkd.li/import/12800659"
          ]
        }
      ]
    },
    {
      "name": "观看视频去除广告提示弹窗",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "@[text=\"取 消\"] + View + [text=\"确 定\"]",
          "key": 0
        }
      ]
    }
  ]
});
