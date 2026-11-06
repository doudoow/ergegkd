// @ts-nocheck
import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  "name": "应用包管理组件",
  "id": "com.miui.packageinstaller",
  "groups": [
    {
      "name": "功能类-放弃开启安全守护",
      "desc": "勾选不再提示并点击放弃开启安全守护",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 0,
      "rules": [
        {
          "matches": "[text=\"30天内不再提示\"][checked=false]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/16487140",
          "exampleUrls": "https://e.gkd.li/fe6682cd-a27a-4183-8717-15fd373bafcf"
        },
        {
          "matches": "[text=\"放弃\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/16487142",
          "exampleUrls": "https://e.gkd.li/859dac99-62ca-4876-bdfb-c84795254111"
        }
      ]
    },
    {
      "name": "功能类-自动安装/更新应用",
      "desc": "该规则仅适配关闭[应用安全验证]和[安全守护]的情况，可在安装页面右上角设置里关闭，关闭后的风险自行承担",
      "enable": false,
      "actionMaximum": 1,
      "matchRoot": true,
      "fastQuery": true,
      "key": 1,
      "rules": [
        {
          "matches": "@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^=\"继续\" || text^=\"仍然\"][text.length=4][visibleToUser=true]",
          "excludeMatches": "[text=\"已了解此应用存在风险\"][checked=false][visibleToUser=true]",
          "activityIds": [
            "com.miui.packageInstaller.NewInstallerPrepareActivity",
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity"
          ],
          "key": 0,
          "name": "点击[安装]/[更新]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487278",
            "https://i.gkd.li/i/16487282",
            "https://i.gkd.li/i/17691996",
            "https://i.gkd.li/i/20053957"
          ],
          "excludeSnapshotUrls": "https://i.gkd.li/i/25095995",
          "exampleUrls": "https://e.gkd.li/bd3e2764-4978-44ed-93d3-f176c23c3ec4"
        },
        {
          "matches": "[text=\"完成\"]",
          "excludeMatches": "[text*=\"安装失败\"]",
          "preKeys": [
            3
          ],
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
          "key": 1,
          "name": "点击[完成]",
          "snapshotUrls": "https://i.gkd.li/i/16487274",
          "excludeSnapshotUrls": "https://i.gkd.li/i/20282424",
          "exampleUrls": "https://e.gkd.li/0011622b-580a-4810-81a4-b4a1181d121d"
        },
        {
          "matches": "@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^=\"继续\" || text^=\"仍然\"][text.length=4][visibleToUser=true]",
          "activityIds": [
            "com.miui.packageInstaller.NewInstallerPrepareActivity",
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity"
          ],
          "key": 2,
          "name": "点击[安装]/[更新]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487278",
            "https://i.gkd.li/i/16487282",
            "https://i.gkd.li/i/17691996",
            "https://i.gkd.li/i/20053957"
          ]
        },
        {
          "matches": "@FrameLayout[clickable=true] > LinearLayout[childCount=1] > [text^=\"继续\" || text^=\"仍然\"][text.length=4][visibleToUser=true]",
          "excludeMatches": "[text=\"已了解此应用存在风险\" || text=\"已了解此应用未经安全检测\"][visibleToUser=true]",
          "activityIds": [
            "com.miui.packageInstaller.NewInstallerPrepareActivity",
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity"
          ],
          "key": 3,
          "name": "点击[安装]/[更新]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487278",
            "https://i.gkd.li/i/16487282",
            "https://i.gkd.li/i/17691996",
            "https://i.gkd.li/i/20053957"
          ],
          "excludeSnapshotUrls": [
            "https://i.gkd.li/i/25095995",
            "https://i.gkd.li/i/26748736"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动允许应用安装软件",
      "desc": "(存在安全风险)自动勾选记住选择并允许应用安装软件",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 2,
      "rules": [
        {
          "matches": [
            "[text^=\"是否允许\"][text*=\"安装应用\"][visibleToUser=true]",
            "CheckBox[text=\"记住我的选择\"][checked=false][visibleToUser=true]"
          ],
          "key": 0,
          "name": "点击[记住我的选择]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487366",
            "https://i.gkd.li/i/16487389",
            "https://i.gkd.li/i/18937578",
            "https://i.gkd.li/i/20287209"
          ],
          "exampleUrls": "https://e.gkd.li/af834ca4-744a-485f-bec6-9802979fe949"
        },
        {
          "matches": "[text=\"允许\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "name": "点击[允许]",
          "snapshotUrls": [
            "https://i.gkd.li/i/16487365",
            "https://i.gkd.li/i/18937576",
            "https://i.gkd.li/i/20287160"
          ],
          "exampleUrls": "https://e.gkd.li/4f4ce827-6b74-4b55-8fed-5e009acd4bbd",
          "key": 1
        }
      ]
    },
    {
      "name": "功能类-安装来源不可信",
      "desc": "点击[授权本次安装]",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 3,
      "rules": [
        {
          "matches": "[text$=\"授权本次安装\"]",
          "position": {
            "left": "width * 0.3511",
            "top": "height * 0.5"
          },
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/17898736",
          "exampleUrls": "https://e.gkd.li/e470baf2-56dc-4e3c-8da0-9747eeec602f",
          "key": 0
        },
        {
          "matches": "LinearLayoutCompat > [text*=\"授权本次安装\"]",
          "position": {
            "left": "width * 0.8743",
            "top": "width * 0.1202"
          },
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/14456398",
          "exampleUrls": "https://m.gkd.li/57941037/e30144c7-c895-4950-a91d-9ce56a8570c8"
        },
        {
          "matches": "ViewGroup > [text*=\"授权本次安装\"]",
          "position": {
            "left": "width * 0.6663",
            "top": "width * 0.1012"
          },
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/14925748",
          "exampleUrls": "https://m.gkd.li/57941037/4bcc94e7-17cb-4887-9e1d-067cf823b109"
        }
      ]
    },
    {
      "name": "功能类-关闭备案信息弹窗",
      "desc": "点击[继续安装]",
      "actionMaximum": 1,
      "key": 4,
      "rules": [
        {
          "matches": [
            "[text$=\"备案信息\"]",
            "[text=\"继续安装\"]"
          ],
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17908298",
            "https://i.gkd.li/i/20642970"
          ],
          "exampleUrls": "https://e.gkd.li/d5bc4b1a-e363-4aab-9240-e6d914730935",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-无视风险继续安装",
      "desc": "(存在安全风险)自动点击无视风险继续安装并授权",
      "enable": false,
      "actionMaximum": 1,
      "fastQuery": true,
      "key": 5,
      "rules": [
        {
          "matches": "@[clickable=true] >2 [text=\"无视风险继续安装\"]",
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/18002566",
          "exampleUrls": "https://e.gkd.li/46f06948-5ec1-4054-8aa3-a8f39e5d1f26"
        },
        {
          "matches": "[text=\"继续\"]",
          "preKeys": [
            0
          ],
          "key": 1,
          "snapshotUrls": "https://i.gkd.li/i/18002704",
          "exampleUrls": "https://e.gkd.li/375fc2ec-841a-4af6-be99-9391ebeb7dc5"
        },
        {
          "matches": "@[clickable=true][desc=\"更多\"] > [vid=\"action_menu_item_child_icon\"]",
          "preKeys": [
            1
          ],
          "key": 2,
          "snapshotUrls": "https://i.gkd.li/i/18002708",
          "exampleUrls": "https://e.gkd.li/de8fb9c9-ea4e-4c03-93bd-047bf31cd4c8"
        },
        {
          "matches": "@[clickable=true] >(1,2) [text=\"单次安装授权\"]",
          "preKeys": [
            2
          ],
          "key": 3,
          "snapshotUrls": [
            "https://i.gkd.li/i/18002712",
            "https://i.gkd.li/i/20746863"
          ],
          "exampleUrls": "https://e.gkd.li/0e8afdd7-04d3-46fd-9095-b61123d041b2"
        }
      ]
    },
    {
      "name": "功能类-自动勾选[已了解此应用存在风险]",
      "key": 6,
      "rules": [
        {
          "matches": "[text=\"已了解此应用存在风险\"][checked=false][visibleToUser=true]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/25095995",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-自动第三方安装应用",
      "desc": "自动允许第三方应用调用安装，安装应用",
      "enable": false,
      "fastQuery": true,
      "key": 7,
      "rules": [
        {
          "matches": "TextView[text*=\"尝试安装应用\"] < LinearLayout +2n LinearLayout > Button[text=\"继续\"]",
          "activityIds": [],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/i/12874746"
        },
        {
          "matches": "@[text=\"允许\"] + [text=\"禁止\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/i/13054478",
            "https://i.gkd.li/i/13399425"
          ]
        }
      ]
    },
    {
      "name": "功能类-自动安装应用",
      "desc": "启用后安装高风险应用将自动完成，请自行评估风险决定是否启用",
      "enable": false,
      "fastQuery": true,
      "key": 8,
      "rules": [
        {
          "matches": "[text=\"继续安装\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 0,
          "name": "点击\"继续安装\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/12818034",
            "https://i.gkd.li/i/12818054",
            "https://i.gkd.li/i/12889120",
            "https://i.gkd.li/i/16322775"
          ]
        },
        {
          "matches": "[text=\"取消\"] - @*[clickable=true] >2 [text=\"继续\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 1,
          "name": "点击\"继续\"",
          "snapshotUrls": "https://i.gkd.li/i/14392314"
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 2,
          "name": "勾选\"已了解此应用未经安全检测\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/12888410",
            "https://i.gkd.li/i/12889120"
          ]
        },
        {
          "matches": "@[text=\"了解风险\"] + [text=\"取消安装\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 3,
          "name": "点击\"了解风险\"",
          "snapshotUrls": "https://i.gkd.li/i/12889135"
        },
        {
          "matches": "[text^=\"已了解此\"][checked=false]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 4,
          "name": "勾选\"已了解此应用存在高风险\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/12889137",
            "https://i.gkd.li/i/12889148",
            "https://i.gkd.li/i/16171390"
          ]
        },
        {
          "matches": "[text=\"仍然安装\"]",
          "activityIds": [
            "com.miui.packageInstaller.NewInstallerPrepareActivity",
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity"
          ],
          "key": 5,
          "name": "点击\"仍然安装\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/12889148",
            "https://i.gkd.li/i/16187625"
          ]
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/done_layout\"] > [text=\"完成\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
            "com.miui.packageInstaller.InstallProgressActivity",
            "com.miui.packageInstaller.ui.securemode.PureInstallProgressActivity"
          ],
          "forcedTime": 30000,
          "key": 6,
          "name": "点击\"完成\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/12818044",
            "https://i.gkd.li/i/13229404",
            "https://i.gkd.li/i/13501872"
          ]
        },
        {
          "matches": "[text=\"取消安装\"] < LinearLayout - @FrameLayout > LinearLayout > [text=\"继续安装\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 7,
          "name": "点击【继续安装】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12818034",
            "https://i.gkd.li/import/12818054"
          ]
        },
        {
          "matches": "@[text=\"继续安装\"] + [text=\"取消安装\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 8,
          "name": "点击【继续安装】2",
          "snapshotUrls": "https://i.gkd.li/import/12889120"
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false]",
          "preKeys": 3,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 9,
          "name": "勾选【已了解此应用存在高风险】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12889137",
            "https://i.gkd.li/import/12889148"
          ]
        },
        {
          "matches": "@[text=\"仍然安装\"] + [text=\"取消安装\"]",
          "preKeys": 9,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 10,
          "name": "点击【仍然安装】",
          "snapshotUrls": "https://i.gkd.li/import/12889148"
        }
      ]
    },
    {
      "name": "功能类-自动更新应用",
      "enable": false,
      "fastQuery": true,
      "key": 9,
      "rules": [
        {
          "matches": [
            "[text=\"取消更新\"]",
            "[text=\"继续更新\"]"
          ],
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 0,
          "name": "点击\"继续更新\"-1",
          "snapshotUrls": [
            "https://i.gkd.li/i/12817988",
            "https://i.gkd.li/i/12910080",
            "https://i.gkd.li/i/14392274"
          ]
        },
        {
          "matches": "@[text=\"继续更新\"] + [text=\"取消更新\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 1,
          "name": "点击\"继续更新\"-2",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024731",
            "https://i.gkd.li/i/13038465"
          ]
        },
        {
          "matches": "[text=\"已了解此安装包未经安全检测\"][checked=false]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 2,
          "name": "勾选\"已了解此安装包未经安全检测\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/13024730",
            "https://i.gkd.li/i/13024731"
          ]
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/done_layout\"] > [text=\"完成\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
            "com.miui.packageInstaller.InstallProgressActivity"
          ],
          "forcedTime": 30000,
          "key": 3,
          "name": "点击\"完成\"",
          "snapshotUrls": [
            "https://i.gkd.li/i/12817999",
            "https://i.gkd.li/i/13255733"
          ]
        },
        {
          "matches": "[text=\"取消更新\"] < LinearLayout - @FrameLayout > LinearLayout > [text=\"继续更新\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 4,
          "name": "点击【继续更新】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12817988",
            "https://i.gkd.li/import/12910080"
          ]
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false][text=\"已了解此安装包未经安全检测\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 5,
          "name": "勾选【已了解此安装包未经安全检测】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13024730",
            "https://i.gkd.li/import/13024731"
          ]
        }
      ]
    },
    {
      "name": "功能类-澎湃-自动安装/更新",
      "desc": "启用后安装高风险应用将自动完成，请自行评估风险决定是否启用",
      "enable": false,
      "fastQuery": true,
      "key": 10,
      "rules": [
        {
          "matches": "@FrameLayout > LinearLayout > [text*=\"继续\"]",
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "key": 0,
          "name": "点击【继续更新】/【继续】",
          "snapshotUrls": [
            "https://i.gkd.li/i/14083552",
            "https://i.gkd.li/i/14083554"
          ]
        },
        {
          "matches": "[text=\"无视风险安装\"]",
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "key": 1,
          "name": "点击【无视风险安装】",
          "snapshotUrls": "https://i.gkd.li/i/14653062"
        },
        {
          "matches": "[text=\"继续\"]",
          "preKeys": 1,
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "key": 2,
          "name": "点击【继续】",
          "snapshotUrls": "https://i.gkd.li/i/14653087"
        },
        {
          "matches": "@LinearLayout[index=0] > [vid=\"action_menu_item_child_icon\"]",
          "preKeys": 2,
          "activityIds": "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
          "key": 3,
          "name": "点击右上角三点展开菜单",
          "snapshotUrls": "https://i.gkd.li/i/14654045"
        },
        {
          "matches": "@[clickable=true] > [text=\"单次授权安装\"]",
          "preKeys": 3,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 4,
          "name": "授权本次安装",
          "snapshotUrls": "https://i.gkd.li/i/14653096"
        },
        {
          "matches": "[text=\"完成\"]",
          "activityIds": "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
          "key": 5,
          "name": "点击[完成]",
          "snapshotUrls": "https://i.gkd.li/i/16487274",
          "exampleUrls": "https://e.gkd.li/0011622b-580a-4810-81a4-b4a1181d121d"
        }
      ]
    },
    {
      "name": "功能类-频繁安装应用自动点[验证]",
      "desc": "弹窗,点击[验证]",
      "key": 11,
      "rules": [
        {
          "matches": [
            "[text*=\"频繁安装应用\"]",
            "[text=\"验证\"][clickable=true]"
          ],
          "actionDelay": 200,
          "fastQuery": true,
          "snapshotUrls": "https://i.gkd.li/i/34111857",
          "exampleUrls": "https://e.gkd.li/abecebb8-cfb1-4cd0-b035-eceda488e40e",
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-备案信息弹窗",
      "desc": "点击[继续安装]",
      "enable": false,
      "actionMaximum": 1,
      "key": 12,
      "rules": [
        {
          "matches": [
            "[text$=\"备案信息\"]",
            "[text=\"继续安装\"]"
          ],
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "fastQuery": true,
          "snapshotUrls": [
            "https://i.gkd.li/i/17908298",
            "https://i.gkd.li/i/20642970"
          ],
          "key": 0
        }
      ]
    },
    {
      "name": "功能类-已了解此应用存在风险",
      "enable": false,
      "fastQuery": true,
      "key": 13,
      "rules": [
        {
          "matches": "[text=\"已了解此应用存在风险\" || text=\"已了解此应用未经安全检测\"][checked=false][visibleToUser=true]",
          "key": 0,
          "snapshotUrls": [
            "https://i.gkd.li/i/25095995",
            "https://i.gkd.li/i/26748736"
          ]
        },
        {
          "matches": "@[clickable=true] >2 [text^=\"继续\"][visibleToUser=true]",
          "preKeys": [
            0
          ],
          "snapshotUrls": [
            "https://i.gkd.li/i/25095995",
            "https://i.gkd.li/i/26748736"
          ],
          "key": 1
        }
      ]
    },
    {
      "name": "自动第三方安装应用",
      "desc": "自动允许第三方应用调用安装，安装应用",
      "enable": false,
      "key": 14,
      "rules": [
        {
          "matches": "TextView[text*=\"尝试安装应用\"] < LinearLayout +2n LinearLayout > Button[text=\"继续\"]",
          "activityIds": [],
          "key": 0,
          "snapshotUrls": "https://i.gkd.li/import/12874746"
        },
        {
          "matches": "@[text=\"允许\"] + [text=\"禁止\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 1,
          "snapshotUrls": [
            "https://i.gkd.li/import/13054478",
            "https://i.gkd.li/import/13399425"
          ]
        }
      ]
    },
    {
      "name": "自动安装应用",
      "desc": "启用后安装高风险应用将自动完成，请自行评估风险决定是否启用",
      "enable": false,
      "key": 15,
      "rules": [
        {
          "matches": "[text=\"取消安装\"] < LinearLayout - @FrameLayout > LinearLayout > [text=\"继续安装\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 0,
          "name": "点击【继续安装】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12818034",
            "https://i.gkd.li/import/12818054"
          ]
        },
        {
          "matches": "@[text=\"继续安装\"] + [text=\"取消安装\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 1,
          "name": "点击【继续安装】",
          "snapshotUrls": "https://i.gkd.li/import/12889120"
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 2,
          "name": "勾选【已了解此应用未经安全检测】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12888410",
            "https://i.gkd.li/import/12889120"
          ]
        },
        {
          "matches": "@[text=\"了解风险\"] + [text=\"取消安装\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 3,
          "name": "点击【了解风险】",
          "snapshotUrls": "https://i.gkd.li/import/12889135"
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false]",
          "preKeys": 3,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 4,
          "name": "勾选【已了解此应用存在高风险】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12889137",
            "https://i.gkd.li/import/12889148"
          ]
        },
        {
          "matches": "@[text=\"仍然安装\"] + [text=\"取消安装\"]",
          "preKeys": 4,
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 5,
          "name": "点击【仍然安装】",
          "snapshotUrls": "https://i.gkd.li/import/12889148"
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/done_layout\"] > [text=\"完成\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
            "com.miui.packageInstaller.InstallProgressActivity",
            "com.miui.packageInstaller.ui.securemode.PureInstallProgressActivity"
          ],
          "key": 6,
          "name": "点击【完成】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12818044",
            "https://i.gkd.li/import/13229404",
            "https://i.gkd.li/import/13501872"
          ]
        }
      ]
    },
    {
      "name": "自动更新应用",
      "enable": false,
      "key": 16,
      "rules": [
        {
          "matches": "[text=\"取消更新\"] < LinearLayout - @FrameLayout > LinearLayout > [text=\"继续更新\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 0,
          "name": "点击【继续更新】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12817988",
            "https://i.gkd.li/import/12910080"
          ]
        },
        {
          "matches": "@[text=\"继续更新\"] + [text=\"取消更新\"]",
          "activityIds": "com.miui.packageInstaller.NewInstallerPrepareActivity",
          "key": 1,
          "name": "点击【继续更新】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13024731",
            "https://i.gkd.li/import/13038465"
          ]
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/install_checked\"][checked=false][text=\"已了解此安装包未经安全检测\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.InstallPrepareAlertActivity",
            "com.miui.packageInstaller.NewInstallerPrepareActivity"
          ],
          "key": 2,
          "name": "勾选【已了解此安装包未经安全检测】",
          "snapshotUrls": [
            "https://i.gkd.li/import/13024730",
            "https://i.gkd.li/import/13024731"
          ]
        },
        {
          "matches": "[id=\"com.miui.packageinstaller:id/done_layout\"] > [text=\"完成\"]",
          "activityIds": [
            "com.miui.packageInstaller.ui.normalmode.InstallProgressActivity",
            "com.miui.packageInstaller.InstallProgressActivity"
          ],
          "key": 3,
          "name": "点击【完成】",
          "snapshotUrls": [
            "https://i.gkd.li/import/12817999",
            "https://i.gkd.li/import/13255733"
          ]
        }
      ]
    }
  ]
});
