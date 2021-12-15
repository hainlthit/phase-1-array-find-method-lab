function superbowlWin(record){
    const findWin = record.find(function(season){
        return season.result === 'W'
    })
    if (findWin){
    return findWin.year
    }
}
