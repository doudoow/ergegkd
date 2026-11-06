// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "OPPO/一加应用安装器",
  "id": "com.oplus.appdetail",
  "groups": [
    {
      "name": "功能类-自动安装应用",
      "desc": "点击 ①继续安装 ②完成",
      "enable": false,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\" || text=\"继续安装\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ],
          "key": 0,
          "name": "点击[继续安装]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570",
            "https://i.gkd.li/i/23146291",
            "https://i.gkd.li/i/23146289"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/13038560"
        },
        {
          "matches": "[text=\"完成\"]",
          "activityIds": ".model.finish.InstallFinishActivity",
          "key": 1,
          "name": "点击[完成]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038664",
            "https://i.gkd.li/i/13054849"
          ]
        },
        {
          "matches": "[vid=\"view_bottom_guide_continue_install_btn\" || text=\"继续安装\"]",
          "excludeMatches": "[vid=\"view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ],
          "key": 2,
          "name": "点击[继续安装]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570",
            "https://i.gkd.li/i/23146291",
            "https://i.gkd.li/i/23146289"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/13038560"
        },
        {
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "activityIds": "com.oplus.appdetail.model.guide.ui.InstallGuideActivity",
          "key": 3,
          "name": "点击【继续安装】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13038560",
            "https://i.gkd.li/import/13054204",
            "https://i.gkd.li/import/13038570"
          ]
        },
        {
          "matches": "[id=\"com.oplus.appdetail:id/launch_button\"][text=\"完成\"]",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "key": 4,
          "name": "点击【完成】",
          "snapshotUrls": "https://i.gkd.li/import/13038664"
        },
        {
          "matches": "[id=\"com.oplus.appdetail:id/done_button\"][text=\"完成\"]",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "key": 5,
          "name": "点击【完成】2",
          "snapshotUrls": "https://i.gkd.li/import/13054849"
        },
        {
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\" || text=\"继续安装\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\" || id=\"com.oplus.appdetail:id/tv_scanning_item\"][text^=\"正在扫描\"]",
          "actionDelay": 50,
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ],
          "key": 6,
          "name": "点击[继续安装]",
          "snapshotUrls": [
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570",
            "https://i.gkd.li/i/23146291",
            "https://i.gkd.li/i/23146289"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/13038560",
            "https://i.gkd.li/i/27276692"
          ]
        }
      ]
    },
    {
      "name": "功能类-安装中高风险应用",
      "enable": false,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "[text=\"不建议安装此应用；若仍需安装，可查看详情\"]",
          "position": {
            "left": "width * 0.726",
            "top": "height * 0.5"
          },
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/22377287",
          "exampleUrls": "https://e.gkd.li/8697d1e8-fa9c-4b5b-92b9-559f55672047"
        },
        {
          "matches": "[text=\"已知悉应用风险\"][checked=false]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/22377327",
          "exampleUrls": "https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a"
        },
        {
          "matches": "[text=\"仍然安装\"]",
          "preKeys": [
            1
          ],
          "snapshotUrls": "https://i.gkd.li/i/22377327",
          "exampleUrls": "https://e.gkd.li/45246cef-1ef5-49bf-8b7f-09377bde823a",
          "key": 2
        }
      ]
    },
    {
      "name": "功能类-自动安装",
      "enable": false,
      "key": 2,
      "rules": [
        {
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "activityIds": "com.oplus.appdetail.model.guide.ui.InstallGuideActivity",
          "key": 0,
          "name": "点击【继续安装】",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038560",
            "https://i.gkd.li/i/13054204",
            "https://i.gkd.li/i/13038570"
          ]
        },
        {
          "matches": "[text=\"完成\"]",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "key": 1,
          "name": "点击【完成】",
          "snapshotUrls": [
            "https://i.gkd.li/i/13038664",
            "https://i.gkd.li/i/13054849"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动[勾选]已知悉风险",
      "key": 3,
      "rules": [
        {
          "matches": "[text^=\"已知悉\"][text*=\"风险\"][checkable=true][checked=false]",
          "activityIds": [
            ".model.guide.ui.InstallGuideActivity",
            ".modelv2.parsing.PackageParsingV2Activity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/22377327",
            "https://i.gkd.li/i/33898132"
          ],
          "exampleUrls": "https://e.gkd.li/509a2a45-c9bd-4b7e-9496-ced36ebdaaf6",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-忽略增强防护提示",
      "desc": "安装完成后弹出的安装增强防护推广弹窗，点击 [取消] 关闭",
      "enable": false,
      "fastQuery": true,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text*=\"增强防护\"]",
            "[text=\"取消\"]"
          ],
          "snapshotUrls": "https://i.gkd.li/i/27193239",
          "key": 0
        }
      ]
    },
    {
      "name": "自动安装应用",
      "enable": false,
      "key": 5,
      "rules": [
        {
          "matches": "[id=\"com.oplus.appdetail:id/view_bottom_guide_continue_install_btn\"]",
          "excludeMatches": "[id=\"com.oplus.appdetail:id/view_scanning_and_tip_view_tv_title\"][text^=\"正在扫描\"]",
          "activityIds": "com.oplus.appdetail.model.guide.ui.InstallGuideActivity",
          "key": 0,
          "name": "点击【继续安装】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13038560",
            "https://i.gkd.li/import/13054204",
            "https://i.gkd.li/import/13038570"
          ]
        },
        {
          "matches": "[id=\"com.oplus.appdetail:id/launch_button\"][text=\"完成\"]",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "key": 1,
          "name": "点击【完成】",
          "snapshotUrls": "https://i.gkd.li/import/13038664"
        },
        {
          "matches": "[id=\"com.oplus.appdetail:id/done_button\"][text=\"完成\"]",
          "activityIds": "com.oplus.appdetail.model.finish.InstallFinishActivity",
          "key": 2,
          "name": "点击【完成】",
          "snapshotUrls": "https://i.gkd.li/import/13054849"
        }
      ]
    }
  ]
});
