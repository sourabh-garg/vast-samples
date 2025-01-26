const InlineLinearTagXMLString =
    '<VAST version="2.0">\n' +
    '\t<Ad id="preroll-1">\n' +
    '\t\t<InLine>\n' +
    '\t\t<AdSystem>2.0</AdSystem>\n' +
    '\t\t<AdTitle>5748406</AdTitle>\n' +
    '\t\t<Impression id="blah">\n' +
    '\t\t<![CDATA[\n' +
    '\t\thttp://b.scorecardresearch.com/b?C1=1&C2=6000003&C3=0000000200500000197000000&C4=us&C7=http://www.scanscout.com&C8=scanscout.com&C9=http://www.scanscout.com&C10=xn&rn=-103217130\n' +
    '\t\t]]>\n' +
    '\t\t</Impression>\n' +
    '\t\t<Creatives>\n' +
    '\t\t\t<Creative>\n' +
    '\t\t\t\t<Linear>\n' +
    '\t\t\t\t\t<Duration>00:00:30</Duration>\n' +
    '\t\t\t\t\t<TrackingEvents></TrackingEvents>\n' +
    '\t\t\t\t\t<VideoClicks>\n' +
    '\t\t\t\t\t<ClickThrough id="scanscout">\n' +
    '\t\t\t\t\t<![CDATA[ http://www.target.com ]]>\n' +
    '\t\t\t\t\t</ClickThrough>\n' +
    '\t\t\t\t\t</VideoClicks>\n' +
    '\t\t\t\t\t<MediaFiles>\n' +
    '\t\t\t\t\t\t<MediaFile height="396" width="600" bitrate="496" type="video/mp4" delivery="progressive">\n' +
    '\t\t\t\t\t\t\t<![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>\n' +
    '\t\t\t\t\t\t</MediaFile>\n' +
    '\t\t\t\t\t</MediaFiles>\n' +
    '\t\t\t\t</Linear>\n' +
    '\t\t\t</Creative>\n' +
    '\t\t\t<Creative>\n' +
    '\t\t\t<CompanionAds>\n' +
    '\t\t\t\t<Companion height="250" width="300" id="555750">\n' +
    '\t\t\t\t\t<HTMLResource>\n' +
    '\t\t\t\t\t<![CDATA[\n' +
    '\t\t\t\t\t<A onClick="var i= new Image(1,1); i.src=\'http://app.scanscout.com/ssframework/log/log.png?a=logitemaction&RI=555750&CbC=1&CbF=true&EC=0&RC=0&SmC=2&CbM=1.0E-5&VI=736e6b13bad531dc476bc3612749bc35&admode=preroll&PRI=-4827170214961170629&RprC=0&ADsn=17&VcaI=192,197&RrC=1&VgI=736e6b13bad531dc476bc3612749bc35&AVI=142&Ust=ma&Uctry=us&CI=1223187&AC=4&PI=567&Udma=506&ADI=5748406&VclF=true\';" HREF="http://target.com" target="_blank"> <IMG SRC="http://media.scanscout.com/ads/target300x250Companion.jpg" BORDER=0 WIDTH=300 HEIGHT=250 ALT="Click Here"> </A> <img src="http://app.scanscout.com/ssframework/log/log.png?a=logitemaction&RI=555750&CbC=1&CbF=true&EC=1&RC=0&SmC=2&CbM=1.0E-5&VI=736e6b13bad531dc476bc3612749bc35&admode=preroll&PRI=-4827170214961170629&RprC=0&ADsn=17&VcaI=192,197&RrC=1&VgI=736e6b13bad531dc476bc3612749bc35&AVI=142&Ust=ma&Uctry=us&CI=1223187&AC=4&PI=567&Udma=506&ADI=5748406&VclF=true" height="1" width="1">\n' +
    '\t\t\t\t\t]]>\n' +
    '\t\t\t\t\t</HTMLResource>\n' +
    '\t\t\t\t</Companion>\n' +
    '\t\t\t</CompanionAds>\n' +
    '\t\t\t</Creative>\n' +
    '\t\t</Creatives>\n' +
    '\t\t</InLine>\n' +
    '\t</Ad>\n' +
    '</VAST>';

const InlineNonLinearXMLString =
    '<VAST version="2.0">\n' +
    '    <Ad id="overlay-1">\n' +
    '        <InLine>\n' +
    '            <AdSystem>2.0</AdSystem>\n' +
    '            <AdTitle>5750100</AdTitle>\n' +
    '            <Error>myErrorUrl.com</Error>\n' +
    '            <Impression>http://example.com/trackingurl/impression</Impression>\n' +
    '            <Creatives>\n' +
    '                <Creative>\n' +
    '                    <NonLinearAds>\n' +
    '                        <NonLinear width="480" height="150" minSuggestedDuration="00:00:05" scalable="true" maintainAspectRatio="true">\n' +
    '                            <StaticResource creativeType="image/png">\n' +
    '                                <![CDATA[\n' +
    '                                http://mms.businesswire.com/media/20150623005446/en/473787/21/iab_tech_lab.jpg\n' +
    '                            ]]>\n' +
    '                            </StaticResource>\n' +
    '        \t\t\t\t\t<NonLinearClickThrough>\n' +
    '        \t\t\t\t\t\t<![CDATA[http://iabtechlab.com]]>\n' +
    '        \t\t\t\t\t</NonLinearClickThrough>\n' +
    '\n' +
    '                        </NonLinear>\n' +
    '                    </NonLinearAds>\n' +
    '                </Creative>\n' +
    '            </Creatives>\n' +
    '        </InLine>\n' +
    '    </Ad>\n' +
    '</VAST>';

export const InlineXMLString_2_0 = {
    InlineLinearTagXMLString,
    InlineNonLinearXMLString,
};
