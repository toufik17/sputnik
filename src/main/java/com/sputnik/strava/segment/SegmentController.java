package com.sputnik.strava.segment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SegmentController {

    @Autowired
    private SegmentService segmentService;

    @RequestMapping(method = RequestMethod.GET, value = "/strava/segments/{id}")
    public
    @ResponseBody
    Segment getSegmentById(@PathVariable String id) {
        return segmentService.getSegmentById(id);
    }
}
