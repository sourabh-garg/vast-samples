const WrapperTagXMLString =
    '<VAST version="3.0">\n' +
    '    <Ad id="20011">\n' +
    '        <Wrapper>\n' +
    '            <AdSystem version="4.0">iabtechlab</AdSystem>\n' +
    '            <VASTAdTagURI><![CDATA[https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%203.0%20Samples/Inline_Companion_Tag-test.xml]]></VASTAdTagURI>\n' +
    '\n' +
    '            <Error>http://example.com/error</Error>\n' +
    '\n' +
    '            <Impression>http://example.com/track/impression</Impression>\n' +
    '            <Creatives>\n' +
    '                <Creative id="5480" sequence="1">\n' +
    '                    <CompanionAds>\n' +
    '                        <Companion id="1232" width="100" height="150" assetWidth="250" assetHeight="200" expandedWidth="350" expandedHeight="250">\n' +
    '                            <StaticResource creativeType="image/png">\n' +
    '                                    <![CDATA[https://www.iab.com/wp-content/uploads/2014/09/iab-tech-lab-6-644x290.png]]>\n' +
    '                            </StaticResource>\n' +
    '                            <CompanionClickThrough>\n' +
    '                                <![CDATA[https://iabtechlab.com]]>\n' +
    '                            </CompanionClickThrough>\n' +
    '                        </Companion>\n' +
    '                    </CompanionAds>\n' +
    '                </Creative>\n' +
    '            </Creatives>\n' +
    '        </Wrapper>\n' +
    '    </Ad>\n' +
    '</VAST>';

export const WrappedXMLString_3_0 = {
    WrapperWithInlineData: WrapperTagXMLString,
};
