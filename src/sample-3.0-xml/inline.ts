const InlineLinearTagXMLString =
    '<VAST version="3.0" xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
    '    <Ad id="20001">\n' +
    '        <InLine>\n' +
    '            <AdSystem version="4.0">iabtechlab</AdSystem>\n' +
    '            <AdTitle>iabtechlab video ad</AdTitle>\n' +
    '\n' +
    '            <Pricing model="cpm" currency="USD">\n' +
    '                <![CDATA[ 25.00 ]]>\n' +
    '            </Pricing>\n' +
    '\n' +
    '            <Error>http://example.com/error</Error>\n' +
    '\n' +
    '            <Impression id="Impression-ID">http://example.com/track/impression</Impression>\n' +
    '\n' +
    '            <Creatives>\n' +
    '                <Creative id="5480" sequence="1">\n' +
    '                    <Linear>\n' +
    '                        <Duration>00:00:16</Duration>\n' +
    '                        <TrackingEvents>\n' +
    '                            <Tracking event="start">http://example.com/tracking/start</Tracking>\n' +
    '                            <Tracking event="firstQuartile">http://example.com/tracking/firstQuartile</Tracking>\n' +
    '                            <Tracking event="midpoint">http://example.com/tracking/midpoint</Tracking>\n' +
    '                            <Tracking event="thirdQuartile">http://example.com/tracking/thirdQuartile</Tracking>\n' +
    '                            <Tracking event="complete">http://example.com/tracking/complete</Tracking>\n' +
    '                            <Tracking event="progress" offset="00:00:10">http://example.com/tracking/progress-10</Tracking>\n' +
    '                        </TrackingEvents>\n' +
    '\n' +
    '                         <VideoClicks>\n' +
    '                            <ClickTracking id="blog">\n' +
    '                                <![CDATA[https://iabtechlab.com]]>\n' +
    '                            </ClickTracking>\n' +
    '                            <CustomClick>http://iabtechlab.com</CustomClick>\n' +
    '                        </VideoClicks>\n' +
    '\n' +
    '                        <MediaFiles>\n' +
    '                            <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300"  scalable="0" codec="0">\n' +
    '                                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '                            </MediaFile>\n' +
    '                        </MediaFiles>\n' +
    '\n' +
    '\n' +
    '                    </Linear>\n' +
    '                </Creative>\n' +
    '            </Creatives>\n' +
    '            <Extensions>\n' +
    '                <Extension type="iab-Count">\n' +
    '                    <total_available>\n' +
    '                        <![CDATA[ 2 ]]>\n' +
    '                    </total_available>\n' +
    '                </Extension>\n' +
    '            </Extensions>\n' +
    '        </InLine>\n' +
    '    </Ad>\n' +
    '</VAST>';

const InlineCompanionXMLString =
    '<VAST version="3.0">\n' +
    '    <Ad id="20004">\n' +
    '        <InLine>\n' +
    '            <AdSystem version="4.0">iabtechlab</AdSystem>\n' +
    '\n' +
    '            <AdTitle>\n' +
    '                <![CDATA[VAST 4.0 Pilot - Scenario 5]]>\n' +
    '            </AdTitle>\n' +
    '            <Description>\n' +
    '                <![CDATA[This is sample companion ad tag with Linear ad tag. This tag while showing video ad on the player, will show a companion ad beside the player where it can be fitted. At most 3 companion ads can be placed. Modify accordingly to see your own content.]]>\n' +
    '            </Description>\n' +
    '\n' +
    '            <Pricing model="cpm" currency="USD">\n' +
    '                <![CDATA[ 25.00 ]]>\n' +
    '            </Pricing>\n' +
    '\n' +
    '            <Error>http://example.com/error</Error>\n' +
    '            <Impression id="Impression-ID">http://example.com/track/impression</Impression>\n' +
    '\n' +
    '            <Creatives>\n' +
    '                <Creative id="5480" sequence="1">\n' +
    '                    <CompanionAds>\n' +
    '                        <Companion id="1232" width="300" height="250" assetWidth="250" assetHeight="200" expandedWidth="350" expandedHeight="250">\n' +
    '                               <StaticResource creativeType="image/png">\n' +
    '                                <![CDATA[https://www.iab.com/wp-content/uploads/2014/09/iab-tech-lab-6-644x290.png]]>\n' +
    '                                </StaticResource>\n' +
    '                                <CompanionClickThrough>\n' +
    '                                    <![CDATA[https://iabtechlab.com]]>\n' +
    '                                </CompanionClickThrough>\n' +
    '                        </Companion>\n' +
    '                    </CompanionAds>\n' +
    '                </Creative>\n' +
    '                <Creative id="5480" sequence="1">\n' +
    '                    <Linear>\n' +
    '                        <Duration>00:00:16</Duration>\n' +
    '                        <TrackingEvents>\n' +
    '                            <Tracking event="start">http://example.com/tracking/start</Tracking>\n' +
    '                            <Tracking event="firstQuartile">http://example.com/tracking/firstQuartile</Tracking>\n' +
    '                            <Tracking event="midpoint">http://example.com/tracking/midpoint</Tracking>\n' +
    '                            <Tracking event="thirdQuartile">http://example.com/tracking/thirdQuartile</Tracking>\n' +
    '                            <Tracking event="complete">http://example.com/tracking/complete</Tracking>\n' +
    '                            <Tracking event="progress" offset="00:00:10">http://example.com/tracking/progress-10</Tracking>\n' +
    '                        </TrackingEvents>\n' +
    '\n' +
    '                        <VideoClicks>\n' +
    '                            <ClickTracking id="blog">\n' +
    '                                <![CDATA[https://iabtechlab.com]]>\n' +
    '                            </ClickTracking>\n' +
    '                        </VideoClicks>\n' +
    '\n' +
    '                        <MediaFiles>\n' +
    '                            <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300" minBitrate="360" maxBitrate="1080" scalable="1" maintainAspectRatio="1" codec="0">\n' +
    '                                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '                            </MediaFile>\n' +
    '                        </MediaFiles>\n' +
    '                    </Linear>\n' +
    '                </Creative>\n' +
    '\n' +
    '            </Creatives>\n' +
    '            <Extensions>\n' +
    '                <Extension type="iab-Count">\n' +
    '                    <total_available>\n' +
    '                        <![CDATA[ 2 ]]>\n' +
    '                    </total_available>\n' +
    '                </Extension>\n' +
    '            </Extensions>\n' +
    '        </InLine>\n' +
    '    </Ad>\n' +
    '</VAST>\n';

const InlineNonLinearXMLString =
    '<VAST version="3.0">\n' +
    '    <Ad id="20005">\n' +
    '        <InLine>\n' +
    '            <AdSystem version="4.0">iabtechlab</AdSystem>\n' +
    '            <AdTitle>\n' +
    '                NonLinear Image\n' +
    '            </AdTitle>\n' +
    '            <Description>\n' +
    "                <![CDATA[VAST 3.0 sample tag for Non Linear ad (i.e Overlay ad). Change the StaticResources to have a tag with your own content. Change NonLinear tag's parameters accordingly to view desired results. ]]>\n" +
    '            </Description>\n' +
    '            <Pricing model="cpm" currency="USD">\n' +
    '                <![CDATA[ 25.00 ]]>\n' +
    '            </Pricing>\n' +
    '            <Error>\n' +
    '            <![CDATA[\n' +
    '            http://example.com/error\n' +
    '            ]]>\n' +
    '            </Error>\n' +
    '            <Impression id="Impression-ID">\n' +
    '            <![CDATA[\n' +
    '            http://example.com/track/impression\n' +
    '            ]]>\n' +
    '            </Impression>\n' +
    '\n' +
    '            <Creatives>\n' +
    '                <Creative id="5480" sequence="1">\n' +
    '                    <NonLinearAds>\n' +
    '                        <NonLinear width="480" height="150" minSuggestedDuration="00:00:05" scalable="true" maintainAspectRatio="true">\n' +
    '                            <StaticResource creativeType="image/png">\n' +
    '                                <![CDATA[\n' +
    '                                http://mms.businesswire.com/media/20150623005446/en/473787/21/iab_tech_lab.jpg\n' +
    '                            ]]>\n' +
    '                            </StaticResource>\n' +
    '\n' +
    '                            <NonLinearClickTracking>\n' +
    '                                <![CDATA[http://example.com/trackingurl/clickTracking]]>\n' +
    '                            </NonLinearClickTracking>\n' +
    '        \t\t\t\t\t<NonLinearClickThrough>\n' +
    '        \t\t\t\t\t\t<![CDATA[http://iabtechlab.com]]>\n' +
    '        \t\t\t\t\t</NonLinearClickThrough>\n' +
    '\n' +
    '        \t\t\t\t</NonLinear>\n' +
    '\t\t\t         </NonLinearAds>\n' +
    '                </Creative>\n' +
    '            </Creatives>\n' +
    '            <Extensions>\n' +
    '                <Extension type="iab-Count">\n' +
    '                    <total_available>\n' +
    '                        <![CDATA[ 2 ]]>\n' +
    '                    </total_available>\n' +
    '                </Extension>\n' +
    '            </Extensions>\n' +
    '        </InLine>\n' +
    '    </Ad>\n' +
    '</VAST>';

const InlineVideoClickTrackingXMLString =
    '<VAST version="3.0" xmlns:xs="http://www.w3.org/2001/XMLSchema">\n' +
    '    <Ad id="20009">\n' +
    '        <InLine>\n' +
    '            <AdSystem version="4.0">iabtechlab</AdSystem>\n' +
    '            <AdTitle>iabtechlab video ad</AdTitle>\n' +
    '            <Pricing model="cpm" currency="USD">\n' +
    '                <![CDATA[ 25.00 ]]>\n' +
    '            </Pricing>\n' +
    '            <Error>http://example.com/error</Error>\n' +
    '            <Impression id="Impression-ID">http://example.com/track/impression</Impression>\n' +
    '            <Creatives>\n' +
    '                <Creative id="5480" sequence="1">\n' +
    '                    <Linear>\n' +
    '                        <Duration>00:00:16</Duration>\n' +
    '\n' +
    '                        <TrackingEvents>\n' +
    '                            <Tracking event="start">http://example.com/tracking/start</Tracking>\n' +
    '                            <Tracking event="firstQuartile">http://example.com/tracking/firstQuartile</Tracking>\n' +
    '                            <Tracking event="midpoint">http://example.com/tracking/midpoint</Tracking>\n' +
    '                            <Tracking event="thirdQuartile">http://example.com/tracking/thirdQuartile</Tracking>\n' +
    '                            <Tracking event="complete">http://example.com/tracking/complete</Tracking>\n' +
    '                            <Tracking event="progress" offset="00:00:10">http://example.com/tracking/progress-10</Tracking>\n' +
    '                        </TrackingEvents>\n' +
    '\n' +
    '                        <VideoClicks>\n' +
    '                            <ClickThrough id="blog">\n' +
    '                                <![CDATA[https://iabtechlab.com]]>\n' +
    '                            </ClickThrough>\n' +
    '                           <ClickTracking>\n' +
    '                                <![CDATA[http://example.com/trackingurl/clickTracking]]>\n' +
    '                            </ClickTracking>\n' +
    '                        </VideoClicks>\n' +
    '\n' +
    '                        <MediaFiles>\n' +
    '                            <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="500" width="400" height="300" minBitrate="360" maxBitrate="1080" scalable="1" maintainAspectRatio="1" codec="0">\n' +
    '                                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '                            </MediaFile>\n' +
    '                        </MediaFiles>\n' +
    '\n' +
    '                    </Linear>\n' +
    '                </Creative>\n' +
    '            </Creatives>\n' +
    '            <Extensions>\n' +
    '                <Extension type="iab-Count">\n' +
    '                    <total_available>\n' +
    '                        <![CDATA[ 2 ]]>\n' +
    '                    </total_available>\n' +
    '                </Extension>\n' +
    '            </Extensions>\n' +
    '        </InLine>\n' +
    '    </Ad>\n' +
    '</VAST>\n';

export const InlineXMLString_3_0 = {
    InlineLinearTagXMLString,
    InlineNonLinearXMLString,
    InlineCompanionXMLString,
    InlineVideoClickTrackingXMLString,
};
