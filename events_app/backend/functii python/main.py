from datetime import datetime


def feature2(events):
    for event in events:
        if event.status == 'active':
            if event.end_date < datetime.now():
                event.status = 'inactive'
                