// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "智慧搜索",
  "id": "com.huawei.search",
  "groups": [
    {
      "name": "分段广告-下拉搜索横幅广告",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.huawei.search:id/iv_topic_close_in_image\" || id=\"com.huawei.search:id/iv_topic_left_close\" || id=\"com.huawei.search:id/iv_topic_close_in_pps\"]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/12667938",
            "https://i.gkd.li/i/12745008",
            "https://i.gkd.li/i/12841076",
            "https://i.gkd.li/i/13266095"
          ]
        },
        {
          "matches": "TextView[text=\"直接关闭\"]",
          "preKeys": [
            2
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/12745001"
          ]
        },
        {
          "matches": "[vid=\"iv_topic_close_in_image\" || vid=\"iv_topic_left_close\" || vid=\"iv_topic_close_in_pps\"]",
          "key": 2,
          "snapshotUrls": [
            "https://i.gkd.li/i/12667938",
            "https://i.gkd.li/i/12745008",
            "https://i.gkd.li/i/12841076",
            "https://i.gkd.li/i/13266095"
          ]
        }
      ]
    },
    {
      "name": "局部广告-搜索框下广告",
      "desc": "点击x掉",
      "key": 1,
      "rules": [
        {
          "matches": "[vid=\"btn_full_mode_cancel\"][clickable=true]",
          "activityIds": ".HomeActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/24856481",
          "key": 0
        }
      ]
    },
    {
      "name": "未分类-下拉搜索横幅广告",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.huawei.search:id/iv_topic_close_in_image\"||id=\"com.huawei.search:id/iv_topic_left_close\"||id=\"com.huawei.search:id/iv_topic_close_in_pps\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12667938",
            "https://i.gkd.li/i/12745008",
            "https://i.gkd.li/i/12841076",
            "https://i.gkd.li/i/13266095"
          ],
          "key": 0
        },
        {
          "matches": "ViewGroup[id=\"com.huawei.search:id/unlike_flow_layout\"] > TextView[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/i/12745001"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "全屏广告-下拉搜索横幅广告",
      "enable": false,
      "key": 3,
      "rules": [
        {
          "matches": "[id=\"com.huawei.search:id/iv_topic_close_in_image\"||id=\"com.huawei.search:id/iv_topic_left_close\"||id=\"com.huawei.search:id/iv_topic_close_in_pps\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12667938",
            "https://i.gkd.li/import/12745008",
            "https://i.gkd.li/import/12841076",
            "https://i.gkd.li/import/13266095"
          ],
          "key": 0
        },
        {
          "matches": "ViewGroup[id=\"com.huawei.search:id/unlike_flow_layout\"] > TextView[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12745001"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "下拉搜索横幅广告",
      "enable": false,
      "key": 4,
      "rules": [
        {
          "matches": "[id=\"com.huawei.search:id/iv_topic_close_in_image\"||id=\"com.huawei.search:id/iv_topic_left_close\"||id=\"com.huawei.search:id/iv_topic_close_in_pps\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12667938",
            "https://i.gkd.li/import/12745008",
            "https://i.gkd.li/import/12841076",
            "https://i.gkd.li/import/13266095"
          ],
          "key": 0
        },
        {
          "matches": "ViewGroup[id=\"com.huawei.search:id/unlike_flow_layout\"] > TextView[text=\"直接关闭\"]",
          "snapshotUrls": [
            "https://i.gkd.li/import/12745001"
          ],
          "key": 1
        }
      ]
    }
  ]
});
