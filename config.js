var csrTool = {
    config : {
        BasicInfo : [
            {
                Name:"CALLER'S NAME",
                Type:'Input'
            },
            {
                Name:"CALLBACK NO.",
                Type:'Input'
            }
        ],
        PersonalInfo : [
            {
                Name:"MEMBER'S ID",
                Type:'Input'
            },
            {
                Name:"MEMBER'S NAME AND DOB",
                Type:'Input'
            },
            {
                Name:"PROVIDER'S NPI ID",
                Type:'Input'
            },
            {
                Name:"TAX ID NUMBER",
                Type:'Input'
            },
            {
                Name:"PROVIDER'S NAME",
                Type:'Input'
            }
        ],
        OtherInfo1 : [
            {
                Name:"GIVE ELIG PROACTIVELY",
                Type:'IF OFFICE VISIT'
            },
            {
                Name:"MEMBER'S NAME AND DOB",
                Type:'Input'
            }
        ],
        OtherInfo2 : [
            {
                Name:"POS",
                Type:'Input'
            },
            {
                Name:"BEN FOR",
                Type:'Input'
            },
            {
                Name:"PROVIDER STATUS",
                Type:'Input'
            }
        ],
        OtherInfo3 : [
            {
                Name:"CODES (CPI/HCPCS)",
                Type:'Input'
            }
        ],
        OtherInfo4 : [
            {
                Name:"QOUTE BENEFITS",
                Type:'Input'
            },
            {
                Name:"COINSURANCE",
                Type:'Input'
            },
            {
                Name:"DEDUCTIBLE",
                Type:'Input'
            },
            {
                Name:"COPAY",
                Type:'Input'
            },
            {
                Name:"ACCUM",
                Type:'Input'
            },
            {
                Name:"OUT OF POCKET MAX (FOR PARTIAL MEMBERS ONLY)",
                Type:'Input'
            }
        ],
        OtherInfo5 : [
            {
                Name:"AUTH (IF REQUIRED)",
                Type:'Input'
            }
        ],
        OtherInfo6 : [
            {
                Name:"PORTAL",
                Type:'Input'
            },
            {
                Name:"TEMP CHECK",
                Type:'Input'
            }
        ],
        OtherInfo7 : [
            {
                Name:"AUTHORIZATION",
                Type:'Input'
            },
            {
                Name:"INPATIENT",
                Type:'Input'
            },
            {
                Name:"OON PROVIDER",
                Type:'Input'
            }
        ]
    }
}

var tmpGroup =  $("[template=Group]")
var tmpInput = $("[template=Input2]")
var formList = $("#formList")

formList.html("")
for(key in csrTool.config){
    var group = document.createElement("div")    
    $(group).html(tmpGroup[0].outerHTML)
    $(group).find("[template]")
        .removeAttr("template")
        .removeAttr("hidden")
        .attr("id",key)
    $(group).find("button").attr("data-target","."+key)

    csrTool.config[key].forEach((e)=>{
        var div = document.createElement("div")    
        $(div).html(tmpInput[0].outerHTML)
        $(div).find("[template]")
            .removeAttr("template")
            .removeAttr("hidden")
        $(div).find(".input-label").text(e.Name)
        $(div).find("input").addClass(key)
        $(div).find("input").attr("placeholder",e.Name)
        $(group).find("> div").first().append($(div).html())
    })
    
    $(formList).append($(group).html())
}

function clearField(obj){
    var selector = $(obj).data("target")
    console.log(selector)
    $(selector).val("")
}