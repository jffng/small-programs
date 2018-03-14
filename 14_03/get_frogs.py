results = []
            
for i in range(0,20):
    # from which number of results should we start paginating
    start = str(10*i)
    print(start)
    
    # make request to get some data 
    data = response.json()['included']    
    
    # init arrays for names and hits
    all_names = []
    hit_ids = []

    for d in data:
        if d.has_key('hitInfo'):
            hit_ids.append(d)
        elif d.has_key('firstName'):
            all_names.append(d)

    for i in hit_ids:
        for n in all_names:
            if i['trackingId'] == n['trackingId']:
                results.append(n)
                print(n['firstName'] + ' ' + n['lastName'])
                all_names.pop(all_names.index(n))
    
    # avoid suspiscion
    sleeptime = max(random.random()*10, 2.12983) 
    sleep(sleeptime)
