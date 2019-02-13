module.exports = {
    entry: './src/script-1.js',
    output: {
        path: __dirname + "/dist/js",
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']  //here an array of presets
                }
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              }
        ]
    },
    mode: 'development'/*,
    devtool: 'source-map'*/
};












/************************************** TODO: УДАЛИТЬ ЭТО ВСЁ

"UF_URMIK_CODE" => $aUser[ "UF_URMIK_CODE" ]
);

$oChatDataManager = $oUserChat->getManager();
$result = $oChatDataManager::add( $aLoadData );
if ( $result->isSuccess() ) {
    $iAddedRowId = $result->getId();
    $aIbsoIdentificator = explode( ":", $aLoadData[ "UF_SYS_XML_ID" ] );

    $aData = array(
        "REQ_CLASS" => $aIbsoIdentificator[ 0 ],
        "REQ_ID" => $aIbsoIdentificator[ 1 ],
        "MSG" => $aLoadData[ "UF_COMMENT" ],
        "FIO" => $aLoadData[ "UF_FIO" ],
        "DATE" => date( "d.m.Y H:i:s", MakeTimeStamp( $aLoadData[ "UF_DATE_COMMENT" ] ) ),
        "URMIK_CODE" => $aLoadData[ "UF_URMIK_CODE" ]
    );

function console_log( $data ){
echo '<script>';
echo 'console.log('. json_encode( $data ) .')';
echo '</script>';
}
console_log( $aData[ "UF_URMIK_CODE ] );*/



/*$oRes = CUser::GetList( $by='id', $sOrder='desc', array( "ID" => $USER->GetID() ), array( "SELECT" => array( "UF_*", 'NAME' ) ) );
$bUser = $oRes->Fetch() 
$bUser[ 'URMIK_CODE' ] = $bUser[ "UF_URMIK_CODE" ];
            */
