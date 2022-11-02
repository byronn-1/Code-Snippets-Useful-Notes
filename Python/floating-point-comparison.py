def approx_equals(a, b):
    print(a, b)
    pointA = str(round(a, 3))
    pointB = str(round(b, 3))
    
    if pointA[3] == pointB[3]:
        return True

    print(pointA, pointB)

    return False

    
    